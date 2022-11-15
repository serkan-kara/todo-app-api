const { skip } = require('graphql-resolvers');

module.exports.protect = (parent, args, { uid }) => {
    if (!uid) {
        throw new Error('Access denied', 400);
    }

    return skip;
}