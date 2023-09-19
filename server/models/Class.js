const { Schema, Types } = require('mongoose');

const classSchema = new Schema(
    {
        className: { type: String },
        notes: [{
            type: Schema.Types.ObjectId,
            ref: 'Note'
        }]
    }
);

module.exports = classSchema;