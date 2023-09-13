const { Schema, Types } = require('mongoose');
const UserSchema = require('./User')
const NoteSchema = require('./Note')

const commentSchema = new Schema({
    commentedNotes: NoteSchema,
    text: { type: String, required: true, minlength: 1, maxlength: 280 },
    uploadDate: { type: Date, default: Date.now, },
    commentedUser: UserSchema
});

module.exports = commentSchema

