const { combineResolvers } = require('graphql-resolvers');
const { protect } = require('../../middleware/auth');
const {
    createTodo,
    getTodos,
    deleteTodo,
    markTodoCompleted,
    markTodoUncompleted
} = require('../../controllers/todo');

module.exports = {
    Query: {
        listTodos: combineResolvers(protect, getTodos)
    },
    Mutation: {
        createTodo: combineResolvers(protect, createTodo),
        deleteTodo: combineResolvers(protect, deleteTodo),
        markTodoCompleted: combineResolvers(protect, markTodoCompleted),
        markTodoUncompleted: combineResolvers(protect, markTodoUncompleted)
    }
}