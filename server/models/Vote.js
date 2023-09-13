const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const VoteSchema = new Schema({
    voteStatus: {
        type: Number,
        default: 0,
    },
    userId: {
        type: String,
    },
    noteId: {
        type: Schema.Types.ObjectId,
        ref: 'Note',
    },
});

module.exports = VoteSchema;
