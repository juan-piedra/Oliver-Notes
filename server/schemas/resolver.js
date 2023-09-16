const { Class, Note, School, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        schools: async () => {
            return School.find();
        },
        note: async (parent, { noteId }) => {
            return Note.findOne({ _id: noteId })
        },
        Classes: async (parent, { associatedSchoolId }) => {
            try {
                const classes = await Class.find({ associatedSchoolId: associatedSchoolId })
                return classes
            } catch (error) {
                throw new Error('Error fetching classes: ' + error)
            }
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const addUser = await User.create({ username, email, password });
            const token = signToken(addUser);
            return { token, addUser }
        }
        ,
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw AuthenticationError
            }
            const correctPassword = await User.isCorrectPassword(password)
            if (!correctPassword) {
                throw AuthenticationError
            }
            const token = signToken(user)
            return { token, user }
        },
        addComment: async (parent, { noteId, commentedUser, text }) => {
            try {
                const note = await Note.findById(noteId);
                if (!note) {
                    throw new Error('Note not found')
                }
                const newComment = {
                    text,
                    commentedUser,
                    uploadDate: new Date()
                }
                note.comments.push(newComment);
                await note.save();
                return note
            } catch (error) {
                throw new Error('Error adding comment:' + error)
            }

        },
        uploadNote: async (parent, { publisher, pdf, price, classId }) => {
            const user = await User.findOne({ _id: publisher });
            const findClass = await Class.findOne({ _id: classId });
            try {
                if (!user) {
                    return new Error('no user found')
                }

                if (!findClass) {
                    return new Error('no class found')
                }
                const createNote = await Note.create({ publisher, pdf, price, classId })
                return createNote
            } catch (error) {
                throw new Error('Error uploading Note:' + error)
            }
        }
    }
}


module.exports = resolvers;
