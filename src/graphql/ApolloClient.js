import fetch from 'node-fetch';
// import { ApolloClient } from 'apollo-client';
// import { WebSocketLink ,} from 'apollo-link-ws';
import { split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';
import ApolloClient from 'apollo-boost';
// import { InMemoryCache, ApolloClient } from 'apollo-boost';

//Apollo Client Config goes here
const httpUri = 'http://localhost:4000';
// // Create an http link:
// const httpLink = createHttpLink({
//   uri: httpUri,
//   fetch,
//   credentials: 'same-origin',
// })

// // Using the ability to split links, you can send data to each link
// // depending on what kind of operation is being sent
// const link = split(({
//     query
//   }) => {
//     const definition = getMainDefinition(query);
//     return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
//   },
//   httpLink);

// const authLink = setContext((_, {
//   headers
// }) => {
//   // get the authentication token from session storage if it exists
//   const token = sessionStorage.getItem('authToken');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token,
//     },
//   };
// });

export default new ApolloClient({ uri: httpUri });
