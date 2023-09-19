const { Note, School, User } = require('../models');
const { create } = require('../models/School');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        schools: async () => {
            return await School.find({})
                .populate('classes')
                .populate({ path: 'classes', populate: { path: "notes", populate: 'publisher' } })
                .populate({
                    path: 'classes', populate: {
                        path: "notes", populate: { path: "comments", populate: "commentedUser" }
                    }
                })
        },
        note: async (parent, { noteId }) => {
            return Note.findOne({ _id: noteId })
                .populate({ path: 'comments', populate: { path: "commentedUser" } })
                .populate({ path: 'publisher' })
        },
        Classes: async (parent, { SchoolId }) => {
            try {
                const classes = await School.findOne({ _id: SchoolId })
                    .populate('classes')
                    .populate({ path: 'classes', populate: { path: "notes", populate: 'publisher' } })
                return classes
            } catch (error) {
                throw new Error('Error fetching classes: ' + error)
            }
        },
        Me: async (parents, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
            }
            throw AuthenticationError
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
            const correctPassword = await user.isCorrectPassword(password)
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
        uploadNote: async (parent, { publisher, pdf, price, classId, schoolId }) => {
            try {
                const user = await User.findOne({ _id: publisher });
                if (!user) {
                    throw new Error('No user found');
                }
                const school = await School.findOne({ _id: schoolId })
                if (!school) {
                    new Error('No School found');
                }

                const targetClass = school.classes.find(classItem => classItem._id.toString() === classId);
                if (!targetClass) {
                    throw new Error('Class not found in the school');
                }
                const createNote = await Note.create({
                    publisher,
                    pdf,
                    price,
                    classId,
                });
                targetClass.notes.push(createNote);
                await school.save();
                return createNote;
            } catch (error) {
                throw new Error('Error uploading Note:' + error)
            }
        },
        addClass: async (parent, { schoolId, className }) => {
            try {
                const findSchool = await School.findOne({ _id: schoolId })
                if (!findSchool) {
                    return new Error('no school found')
                }
                const newClass = {
                    className,
                    note: []
                }
                findSchool.classes.push(newClass);
                await findSchool.save()
                return findSchool;
            } catch (error) {
                throw new Error('Error uploading class:' + error)

            }
        }
    }
}


module.exports = resolvers;
