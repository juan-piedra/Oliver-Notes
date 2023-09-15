const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const User = require('./User')
const noteSchema = new Schema({
    price: {
        type: Number,
    },
    pdf: {
        type: String,
        required: true,
    },
    comments: [{
        text: {
            type: String, required: true, minlength: 1, maxlength: 280
        },

        uploadDate: {
            type: Date, default: Date.now,
        },
        commentedUser: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    }],
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    purchasers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    uploadDate: { type: Date, default: Date.now },
    voteCount: { type: Number }
});

const Note = model('Note', noteSchema);

module.exports = Note;
