const bcrypt = require('bcrypt');
const MongoLib = require('../../lib/mongo');
const config = require('../../config');

const users = [
    {
        email: 'root@undefined.sh',
        name: 'root',
        password: config.defaultAdminPassword,
        isAdmin: true
    },
    {
        email: 'sebas@undefined.sh',
        name: 'Sebastian Galindo',
        password: config.defaultUserPassword,
    },
    {
        email: 'valg@undefined.sh',
        name: 'Valentina Amaya',
        password: config.defaultUserPassword,
    }
];

const createUser = async (mongoDB, user) => {
    const { name, email, password, isAdmin } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = await mongoDB.create('users', {
        name,
        email,
        password: hashedPassword,
        isAdmin: Boolean(isAdmin)
    });

    return userId;
}

const seedUsers = async () => {
    try {
        const mongoDB = new MongoLib();

        const promises = users.map(async user => {
            const userId = await createUser(mongoDB, user);
            console.log(`[SCRIPT] User created with id: ${userId}`);
        })

        await Promise.all(promises);
        return process.exit(0);
    } catch (e) {
        console.log(`[SCRIPT] Error! ${e}`);
        process.exit(1);
    }
}

seedUsers();