import "reflect-metadata";
import { AppDataSource } from "./db/db-client";
import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import http from 'http';


// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        console.log(`연결성공`);
    })
    .catch((error) => console.log(error))

async function main() {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs:gql`type Query {hello:String}`,
    resolvers:{
      Query: {
        hello: () => `Hello world`
      }
    },
    plugins: [ApolloServerPluginLandingPageLocalDefault()]
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({app});

  const httpServer = http.createServer(app);

  httpServer.listen(process.env.PORT || 4000, () => {
    if(process.env.NODE_ENV !== 'production') {
      console.log(`
      server started on => http://localhost:4000
      graphql playground => http://localhost:4000/graphql
      `);
    } else {
      console.log(`Production server Started...`);
    }
  })
}

main().catch(err => console.log(err));