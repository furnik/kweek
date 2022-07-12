import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {GraphQLError} from 'graphql';

import {createUploadLink} from 'apollo-upload-client';

const httpLink = createUploadLink({
  uri: 'https://polar-retreat-20272.herokuapp.com/graphql',
});

const errorLink = onError(({networkError, graphQLErrors}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}, index) => {
      console.log(`Message: ${message}, Location: ${locations}, Path: ${path}`);
      const err = graphQLErrors[index];

      if (err instanceof GraphQLError) {
        err.message = message.replace('GraphQL error: ', '');
      }
    });
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'ignore',
    },
  },
  ssrForceFetchDelay: 100,
});

export const Provider: React.FC<{children: React.ReactNode}> = ({children}) => <ApolloProvider client={client}>{children}</ApolloProvider>;
