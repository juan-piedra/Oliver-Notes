const { Schema, model } = require('mongoose');
// const classSchema = require('./Class')
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
            type: String, minlength: 1, maxlength: 280
        },

        uploadDate: {
            type: Date,
            default: Date.now,
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
});

const Note = model('Note', noteSchema);

module.exports = Note;
