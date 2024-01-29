// Import your models
const {User} = require('../models');

const resolvers = {
  Query: {
    // Implement your query resolvers here, if any
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return user;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Incorrect email or password');
      }

      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new Error('Incorrect email or password');
      }

      return user;
    },
    saveBook: async (_, { userId, book }) => {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $push: { savedBooks: book } },
        { new: true }
      );

      return updatedUser;
    },
    removeBook: async (_, { userId, bookId }) => {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );

      return updatedUser;
    },
  },
};

module.exports = resolvers;
