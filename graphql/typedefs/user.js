const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Mutation {
        signUp(name: String!, email: String!, password: String!): Boolean
    }

    extend type Query {
        login(email: String!, password: String!): String
    }
`;