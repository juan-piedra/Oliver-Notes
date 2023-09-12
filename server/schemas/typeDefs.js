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
    schoolName: String
    state: String
    classes: [Class]
  }
 
  type Class {
    _id: ID
    schoolID: ID! 
    notes: [Note]
  }
  type Note {
    _id: ID
    price: Float
    pdf: String 
    comments: [Comment]
    publisherId: ID!
    purchasers: [ID]
    uploadDate: String
    voteCount: Int
  }
  type Comment {
    _id: ID
    notesId: ID!
    text: String
    uploadDate: String
  }
  type Votes {
    _id: ID
    voteStatus: Int
    noteId: ID!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    userNotes: [Note]
    purchasedNotes: [Note]
    userVotes: [Votes]
    notes: [Note]
    comments: [Comment]
    user: User
    school(_id: ID!): School
    class(_id: ID!): Class
    note(_id: ID!): Note
}

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    
  }
`;

module.exports = typeDefs;
