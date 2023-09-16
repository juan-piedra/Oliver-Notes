const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userNotes: [Note]
    purchasedNotes: [Note]
  }
  type School {
    _id: ID
    schoolName: String 
    classes: [Class]
  }
 
  type Class {
    _id: ID
    associatedSchoolId: ID 
    className: String
    notes: [Note]
  }
  type Note {
    _id: ID
    price: Int
    pdf: String 
    classId: ID
    comments: [Comment]
    publisher: User
    purchasers: [User]
    uploadDate: String
  }
  type Comment {
    _id: ID
    commentedNotes: Note
    text: String
    uploadDate: String
    commentedUser: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    schools: [School]
    note(noteId: ID!): Note
    Classes(associatedSchoolId: ID!): [Class]
   
}

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(noteId: ID!, commentedUser: ID!, text: String! ): Note
    uploadNote(price: Int!, pdf: String!, publisher: ID!, classId: ID!): Note
  }
`;

module.exports = typeDefs;
