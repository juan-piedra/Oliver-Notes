const { Schema, model } = require('mongoose');
const Class = require('./Class');

const schoolSchema = new Schema({
    schoolName: {
        type: String,
        required: true
    },
    classes: [Class],
});

const School = model('School', schoolSchema);

module.exports = School;
