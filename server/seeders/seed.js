const db = require('../config/connection');
const { School, User, Note } = require('../models');
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
        const users = await User.find({});
        const randomUserId = () => users[Math.floor(Math.random() * users.length)]._id;
        const newNoteArr = [
            {
                price: "$5.99",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                pdf: 'https://docs.google.com/document/d/1-2EE1JhIWOsKaIjaM5DCcxp3sZqW_k6gMtTkJO3azzM/edit',

            },
            {
                price: "$7.99",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                pdf: 'https://docs.google.com/document/d/1-2EE1JhIWOsKaIjaM5DCcxp3sZqW_k6gMtTkJO3azzM/edit',

            }]
        const newClassesArr = [
            {
                className: "History 102",
                notes: []
            },
            {
                className: " Communications 101",
                notes: []
            },
            {
                className: "Math 103",
                notes: []
            },
            {
                className: "Chemistry 301",
                notes: []
            }
        ]

        for (const school of schools) {
            school.classes = newClassesArr;
            for (const singleClass of school.classes) {
                const createClass = await Note.create(newNoteArr.map(note => ({
                    ...note,
                    publisher: randomUserId(),
                    classId: singleClass._id
                })))
                singleClass.notes = createClass.map(note => note._id)
                await school.save();
            }
        }



        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});

