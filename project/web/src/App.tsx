import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  theme,
} from "@chakra-ui/react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});


export const App:React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Text>Ghibli GraphQl</Text>
      </Box>
    </ChakraProvider>
  </ApolloProvider>
);
