const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Drugs {
        _id: ID!
        productndc: String!
        producttypename: String!
        nonproprietaryname: String
        dosageformname: String
        routename: String
        active_numerator_strength: String!
        active_ingred_unit: String
        ndc_exclude_flag: String
        listing_record_certified_through: String
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        savedDrugs: [Drugs]
    }

    type Query {
        userDrugs(userId: String): [Drugs]
        findDrugs(drugName: String): [Drugs]
        user(userId: String): [User]
    }

    
    type Mutation {
        addUser(name: String!): User
        addDrugs(productndc: String, producttypename: String nonproprietaryname: String!, dosageformname: String, routename: String, active_numerator_strength: String!, active_ingred_unit: String!, ndc_exclude_flag: String, listing_record_certified_through: String): Drugs
        addSavedDrugs(drugs: [ID]!): User
      }
`;


module.exports = typeDefs;