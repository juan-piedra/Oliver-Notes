const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const userSchema = require('./User')
const noteSchema = new Schema({
    price: {
        type: Number,
    },
    pdf: {
        type: String,
        required: true,
    },
    comments: [commentSchema],
    publisher: userSchema,
    purchasers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    uploadDate: { type: Date, default: Date.now },
    voteCount: { type: Number }
});

const Note = model('Note', noteSchema);

module.exports = Note;
