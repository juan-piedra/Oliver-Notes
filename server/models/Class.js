const { Schema, model } = require('mongoose');
const School = require('./School');


const classSchema = new Schema({
    associatedSchoolId: {
        type: Schema.Types.ObjectId,
        ref: 'School'
    },
    className: {
        type: String,
        required: true
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]
});

const Class = model('Class', classSchema);

module.exports = Class;
