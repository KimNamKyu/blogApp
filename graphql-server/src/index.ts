import koa from 'koa';
// import Router from 'koa-router';
// import bodyParser from 'koa-bodyparser';
import {ApolloServer, gql} from 'apollo-server-koa';

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'hello world',
    }
};

const server = new ApolloServer({typeDefs, resolvers});
const app = new koa();
server.applyMiddleware({app});
app.listen({port:4000}, ()=> {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})

