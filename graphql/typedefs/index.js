const { gql } = require('apollo-server-express');

const todoTypeDefs = require('./todo');
const userTypeDefs = require('./user');

const typeDefs = gql`
    type Query
    type Mutation
`;

module.exports = [
    typeDefs,
    todoTypeDefs,
    userTypeDefs
]