const { signUp, login } = require('../../controllers/user');

module.exports = {
    Mutation: {
        signUp: signUp,
        login: login
    }
}