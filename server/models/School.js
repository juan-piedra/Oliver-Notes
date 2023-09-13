const { Schema, model } = require('mongoose');
const classSchema = require('./Class');

const schoolSchema = new Schema({
    schoolName: {
        type: String,
        required: true
    },
    state: {
        type: String,
    },
    classes: [classSchema],
});

const School = model('School', schoolSchema);

module.exports = School;
