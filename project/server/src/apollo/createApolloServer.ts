import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import { Request, Response } from 'express';
import { GraphQLSchema } from 'graphql';

export interface MyContext {
  req: Request;
  res: Response;
}

const createApolloServer = async (
  schema: GraphQLSchema,
): Promise<ApolloServer> => {
  return new ApolloServer<MyContext>({
    schema,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    context: ({ req, res }) => {
      // 액세스 토큰 검증
      return {
        req,
        res,
      };
    },
  });
};

export default createApolloServer;