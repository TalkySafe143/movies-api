const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const ApiKeysService = require('../services/apiKeys');
const config = require('../config');
const UserService = require('../services/users'); //
const validation = require('../utils/middlewares/validation'); //

const { createUserSchema, createUserProviderSchema } = require('../utils/schemas/user'); // 

// Basic strategy
require('../utils/auth/strategies/basic');

function AuthAPI(app) {
    const router = express.Router();
    app.use('/api/auth', router);

    const apiKeysServices = new ApiKeysService();
    const userService = new UserService(); //

    router.post('/sign-in', async (req, res, next) => {
        const { apiKeyToken } = req.body;

        if (!apiKeyToken) {
            next(boom.unauthorized('Api Token is required [apiKeyToken]'))
        }

        passport.authenticate('basic', (error, user) => {
            try {
                if (error || !user) {
                    next(boom.unauthorized('Hay un error o no se encontró un usuario'));
                    console.log(error)
                }

                req.login(user, { session: false }, async (err) => {
                    if (err) next(err);

                    const apiKey = await apiKeysServices.getApiKey({ token: apiKeyToken });

                    if (!apiKey) next(boom.unauthorized());

                    const { _id: id, name, email } = user;

                    const payload = {
                        sub: id,
                        name,
                        email,
                        scopes: apiKey.scopes
                    }

                    const token = jwt.sign(payload, config.authJwtSecret, {
                        expiresIn: '15m'
                    })

                    return res.status(200).json({
                        token,
                        user: { id, name, email }
                    })
                })
            } catch(e) {
                next(e);
            }
        })(req, res, next)
    })

    router.post('/sign-up', validation(createUserSchema), async (req, res, next) => {
        const user = req.body;

        try {
            const alreadyCreatedUser = await userService.getUser({ email: user.email });

            if (alreadyCreatedUser) throw boom.badRequest('The user is already created');

            const createUserId = await userService.createUser({ user });

            res.status(201).json({
                data: createUserId,
                message: 'User Created'
            })
        } catch(e) {
            next(e);
        }
    })

    router.post('/sign-provider', validation(createUserProviderSchema), async (req, res, next) => {
        const { apiKeyToken, ...user } = req.body;

        if (!apiKeyToken) next(boom.unauthorized('API Key Token is required'))

        try {
            const queriedUser = await userService.getOrCreateUser({ user });
            const apiKey = await apiKeysServices.getApiKey({ token: apiKeyToken });

            if (!apiKey) next(boom.unauthorized());

            const { _id: id, name, email } = queriedUser;

            const payload = {
                sub: id,
                name,
                email,
                scopes: apiKey.scopes
            }

            const token = jwt.sign(payload, config.authJwtSecret, { expiresIn: '15m' })

            res.status(200).json({ 
                token,
                user: {
                    id,
                    name,
                    email
                }
             })
        } catch(e) {
            next(e)
        }
    })
}

module.exports = AuthAPI;