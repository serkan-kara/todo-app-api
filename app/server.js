const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config({ path: './app/config.env' });

const typeDefs = require('../graphql/typedefs/index');
const resolvers = require('../graphql/resolvers/index');
const { verifyUser } = require('../helpers/context');

const app = express();

app.use(express.json());

async function startServer() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: async ({ req }) => {
            await verifyUser(req);
            return {
                uid: req.uid
            }
        }
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/graphql' });
}

startServer();


const PORT = process.env.PORT || 4880;

app.listen(
    PORT,
    console.log(` Server running at ${PORT} `.green.inverse)
)