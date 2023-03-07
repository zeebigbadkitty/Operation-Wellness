const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Drug {
    _id: ID!
    productndc: String
    producttypename: String!
    active_numerator_strength: String!
    active_ingred_unit: String!
  }
  input DrugInput {
    productndc: String
    producttypename: String!
    active_numerator_strength: String!
    active_ingred_unit: String!
  }
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    savedDrugs: [Drug]
  }

  type Query {
    userDrugs(userId: String): [Drug]
    findDrugs(drugName: String): [Drug]
    user(userId: String): [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addDrugs(drugs: [DrugInput]): [Drug]
    addSavedDrugs(drugs: [ID]!): User
    login(email: String!, password: String!): Auth
    logout: Boolean
  }
`;

module.exports = typeDefs;
