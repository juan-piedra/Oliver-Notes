const { Schema, model } = require('mongoose');
const School = require('./School');
const note = require('./Note')


const classSchema = new Schema({
    associatedSchool: School,
    className: {
        type: String,
        required: true
    },
    notes: [note]
});

const Class = model('Class', classSchema);

module.exports = Class;
