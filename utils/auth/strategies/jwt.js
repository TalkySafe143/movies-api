const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt')
const boom = require('@hapi/boom');
const UserService = require('../../../services/users');
const config = require('../../../config');

passport.use(new Strategy({
    secretOrKey: config.authJwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async (payload, cb) => {
    const userService = new UserService()

    try {
        const user = await userService.getUser({ email: payload.email });

        if (!user) return cb(boom.unauthorized(), null);

        delete user.password;

        cb(null, { ...user, scopes: payload.scopes })
    } catch(e) {
        cb(e)
    };
}));

