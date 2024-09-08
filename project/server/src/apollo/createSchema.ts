import { GraphQLSchema } from 'graphql';
import { PubSub } from 'graphql-subscriptions';
import { buildSchema } from 'type-graphql';
import { CutResolver } from '../resolvers/Cut';
import { FilmResolver } from '../resolvers/Film';
import { UserResolver } from '../resolvers/User';

export const createSchema = async (): Promise<GraphQLSchema> => {
  return buildSchema({
    resolvers: [
      FilmResolver,
      CutResolver,
      UserResolver,
    ],
    pubSub: new PubSub(),
  });
};