import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://dev-api.skillwallet.id/api/',
    cache: new InMemoryCache()
  });

export default client ;