const { Schema, model } = require('mongoose');
const schoolSchema = require('./School');
const noteSchema = require('./Note')


const classSchema = new Schema({
    associatedSchool: schoolSchema,
    className: {
        type: String,
        required: true
    },
    notes: [noteSchema]
});

const Class = model('Class', classSchema);

module.exports = Class;
