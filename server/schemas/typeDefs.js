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
    }

    type Query {
        drugs: [Drugs]
        user(_id: String): [User]
    }
    type Mutation {
        addUser(name: String!): User
        addDrugs(productndc: String, producttypename: String nonproprietaryname: String!, dosageformname: String, routename: String, active_numerator_strength: String!, active_ingred_unit: String!, ndc_exclude_flag: String, listing_record_certified_through: String): Drugs
      }
`;

module.exports = typeDefs;