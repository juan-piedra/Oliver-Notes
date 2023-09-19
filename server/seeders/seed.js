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
        const schools = await School.find({});
        const newClassesArr = [
            {
                className: "history102",
                notes: []
            },
            {
                className: "history101",
                notes: []
            },
            {
                className: "history103",
                notes: []
            },
            {
                className: "Math301",
                notes: []
            },
            {
                className: "fullStackbc101",
                notes: []
            }
        ]
        for (const school of schools) {
            school.classes = newClassesArr;
            await school.save();
        }
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
