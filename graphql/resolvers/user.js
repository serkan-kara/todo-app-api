const { signUp, login } = require('../../controllers/user');

module.exports = {
    Query: {
        login: login
    },
    Mutation: {
        signUp: signUp
    }
}