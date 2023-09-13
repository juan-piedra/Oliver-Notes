const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const UserSchema = require('./User')

const noteSchema = new Schema({
    price: {
        type: Number,
    },
    pdf: {
        type: String,
        required: true,
    },
    comments: [commentSchema],
    publisher: UserSchema,
    purchasers: [UserSchema],
    uploadDate: { type: Date, default: Date.now },
    voteCount: { type: Number }
});

const Note = model('Note', noteSchema);

module.exports = Note;
