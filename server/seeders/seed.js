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
        const newClassesArr = [
            {
                className: "History 102",
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
                console.log("Processing...")
            }
        }



        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});

