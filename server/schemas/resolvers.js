const {Drugs, User} = require('../models');

const resolvers = {
    Query: {
        drugs: async() => {
            return Drugs.find({});
            //This query should return all the drugs in our database
        },
        user: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return User.find(params);
            //This query should return a user by their id
        },
    },
};

module.exports = resolvers;