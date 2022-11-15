const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        listTodos: [Todo!]!
    }

    extend type Mutation {
        createTodo(title: String!): Boolean
        markTodoCompleted(id: Int!): Boolean
        markTodoUncompleted(id: Int!): Boolean
        deleteTodo(id: Int!): Boolean
    }

    type Todo {
        id: Int
        todo: String
        completed: Boolean
        time: String
        user_id: Int
    }
`;