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

    
    type Mutation {
        addUser(name: String!): User
        addDrugs(drugs: [DrugInput]): [Drug]
        addSavedDrugs(drugs: [ID]!): User
      }
`;

module.exports = typeDefs;
