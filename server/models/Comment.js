const { Schema, Types } = require('mongoose');
const UserSchema = require('./User')
const NoteSchema = require('./Note')

const commentSchema = new Schema({
    commentedNotes: {
        type: Schema.Types.ObjectId,
        ref: 'Note'
    },
    text: { type: String, required: true, minlength: 1, maxlength: 280 },
    uploadDate: { type: Date, default: Date.now, },
    commentedUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = commentSchema

