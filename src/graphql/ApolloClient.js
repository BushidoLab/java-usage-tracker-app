import ApolloClient from 'apollo-boost';
import { RestLink } from 'apollo-link-rest';

//ToDO: Migrate away from apollo boost

const httpUri = process.env.JAVA_USAGE_TRACKER_API || 'http://localhost:4000/';
// const restLink = new RestLink({ uri: httpUri })

const token = sessionStorage.getItem('authToken');

export default new ApolloClient({
    uri: httpUri,
    request: async operation => {
        operation.setContext({ headers: { authorization: token } });
    },
});
