const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'secretsecret';
const expiration = '2h'

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user', {
        extension: { code: 'UNAUTHENTICATED' }
    }),

    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim()
        }
        if (!token) {
            return req
        }
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data
        } catch (error) {
            console.log(error);
        }
        return req
    },
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id }
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
    }
}