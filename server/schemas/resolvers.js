const { Drugs, User } = require("../models");

const resolvers = {
  Query: {
    userDrugs: async (userId) => {
      return Drugs.find({});
      //This query should return all the drugs in our database by user
    },

    findDrugs: async (drugName) => {
      var regexp = new RegExp("^" + drugName);
      return Drugs.find({ proprietaryname: regexp });
      //This query should return all the drugs in our database by drug name
    },

    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
      //This query should return a user by their id
    },
  },
};

module.exports = resolvers;
