const { Schema, model } = require('mongoose');
// const classSchema = require('./Class');

const schoolSchema = new Schema({
    schoolName: {
        type: String,
        required: true
    },
    classes: [{
        className: { type: String },
        notes: [{
            type: Schema.Types.ObjectId,
            ref: 'Note'
        }]
    }],
});

const School = model('School', schoolSchema);

module.exports = School;
