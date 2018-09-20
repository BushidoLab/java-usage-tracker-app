import fetch from 'node-fetch';
import {ApolloClient,} from 'apollo-client';
import {WebSocketLink,} from 'apollo-link-ws';
import {split,} from 'apollo-link';
import {createHttpLink,} from 'apollo-link-http';
import {getMainDefinition,} from 'apollo-utilities';
import {setContext,} from 'apollo-link-context';
import {InMemoryCache,} from 'apollo-boost';

//Apollo Client Config goes here
