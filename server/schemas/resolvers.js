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

  Mutation: {
     addSavedDrugs: async (parent, { drugs }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedDrugs: drugs } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
  }
};

module.exports = resolvers;
