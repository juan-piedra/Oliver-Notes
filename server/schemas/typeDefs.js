const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    purchasedNotes: [Note]
  }
  type School {
    _id: ID
    schoolName: String 
    classes: [Class]
  }
 
  type Class {
    _id: ID
    className: String
    notes: [Note]
  }
  type Note {
    _id: ID
    price: String
    pdf: String 
    comments: [Comment]
    publisher: User
    purchasers: [User]
    uploadDate: String
    description: String
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
    Classes(SchoolId: ID!): School
    Me: User
}

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(noteId: ID!, commentedUser: ID!, text: String! ): Note
    uploadNote(price: String!, pdf: String!, publisher: ID!, classId: ID!, schoolId: ID!): Note
    addClass(schoolId: ID!, className: String! ): School
  }
`;

module.exports = typeDefs;
