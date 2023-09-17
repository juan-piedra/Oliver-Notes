const db = require('../config/connection');
const { School, User } = require('../models');
const schoolSeeds = require('./schoolSeeds.json');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('School', 'schools');
        await cleanDB('User', 'users');
        await cleanDB('Note', 'notes');
        await School.create(schoolSeeds);
        await User.create(userSeeds);

        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
