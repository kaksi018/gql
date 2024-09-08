import 'reflect-metadata';
import { AppDataSource } from './db/db-client';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import http from 'http';
import { buildSchema } from 'type-graphql';
import { FilmResolver } from './resolvers/Film';
import { CutResolver } from './resolvers/Cut';
import { createSchema } from './apollo/createSchema';
import createApolloServer from './apollo/createApolloServer';
import { createSubscriptionServer } from './apollo/createSubscriptionServer';

// 외부 DB 연결시 사용
/* AppDataSource.initialize()
    .then(() => {
        console.log(`연결성공`);
    })
    .catch((error) => console.log(error))
 */
async function main() {
  await AppDataSource.initialize();

  const app = express();
  app.use(express.static('public'));

  const httpServer = http.createServer(app);

  const schema = await createSchema();
  await createSubscriptionServer(schema, httpServer);
  const apolloServer = await createApolloServer(schema);
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: {
      origin: [
        'http://localhost:3000',
        'https://studio.apollographql.com',
        process.env.FRONT_ORIGIN || '',
      ],
      credentials: true,
    },
  });

  httpServer.listen(process.env.PORT || 4000, () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`
      server started on => http://localhost:4000
      graphql playground => http://localhost:4000/graphql
      `);
    } else {
      console.log(`Production server Started...`);
    }
  });
}

main().catch((err) => console.error(err));
