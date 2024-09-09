import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import { Request, Response } from 'express';
import { GraphQLSchema } from 'graphql';
import redis from '../redis/redis-client';
import {
  JwtVerifiedUser,
  verifyAccessTokenFromReqHeaders,
} from '../utils/jwt-auth';

export interface MyContext {
  req: Request;
  res: Response;
  verifiedUser: JwtVerifiedUser;
  redis: typeof redis;
}

const createApolloServer = async (
  schema: GraphQLSchema,
): Promise<ApolloServer> => {
  return new ApolloServer<MyContext>({
    schema,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    context: ({ req, res }) => {
      // 액세스 토큰 검증
      const verifed = verifyAccessTokenFromReqHeaders(req.headers);
      return {
        req,
        res,
        verifiedUser: verifed,
        redis,
      };
    },
  });
};

export default createApolloServer;
