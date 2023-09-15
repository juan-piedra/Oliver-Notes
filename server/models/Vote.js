const { Schema } = require('mongoose');

const VoteSchema = new Schema({
    voteStatus: {
        type: Number,
        default: 0,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    noteId: {
        type: Schema.Types.ObjectId,
        ref: 'Note',
    },
});

module.exports = VoteSchema;
