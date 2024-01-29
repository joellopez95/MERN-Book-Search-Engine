const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.headers.authorization || '';

    if (token) {
      // ["Bearer", "<tokenvalue>"]
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      throw new AuthenticationError('You have no token!');
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      console.error('Invalid token', err);
      throw new AuthenticationError('Invalid token!');
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
