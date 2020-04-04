import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';
import axios from 'axios';

export const baseUrl = 'http://localhost:4000';

const link = createHttpLink({
    uri: `${baseUrl}/graphql`,
    credentials: 'include'
});

export const client = new ApolloClient({
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only'
        }
    },
    cache: new InMemoryCache(),
    link,
});

export default axios.create({
    baseURL: baseUrl,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
});