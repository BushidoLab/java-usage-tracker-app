import ApolloClient from 'apollo-boost';

const httpUri = 'http://localhost:4000';

export default new ApolloClient({ uri: httpUri });
