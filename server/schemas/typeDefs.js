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
    voteCount: Int
    Comments:
  }
  type Comment {
    _id: ID
    commentedNotes: Note
    text: String
    uploadDate: String
    commentedUser: User
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
    publisher: User
    commentedUser: User
}

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    
  }
`;

module.exports = typeDefs;
