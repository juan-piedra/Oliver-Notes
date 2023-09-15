const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userNotes: [Note]
    purchasedNotes: [Note]
    userVotes: [Votes]
  }
  type School {
    _id: ID
    schoolName: 
    classes: [Class]
  }
 
  type Class {
    _id: ID
    associatedSchool: School 
    className: String
    notes: [Note]
  }
  type Note {
    _id: ID
    price: Float
    pdf: String 
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
    addComment(noteId: ID!): Note
}

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    
  }
`;

module.exports = typeDefs;
