const { Drug, User } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    userDrugs: async (userId) => {
      return Drug.find({});
      //This query should return all the drugs in our database by user
    },

    findDrugs: async (drugName) => {
      var regexp = new RegExp("^" + drugName);
      return Drug.find({ proprietaryname: regexp });
      //This query should return all the drugs in our database by drug name
    },

    user: async (parent, { userId }) => {
      const params = userId ? { _id: userId } : {};
      return User.findOne(params);
      //This query should return a user by their id
    },

    allUsers: async () => {
      return User.find();
      //This query should return all the users in our database
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
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
