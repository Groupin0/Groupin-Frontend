import ApolloClient from 'apollo-boost';
import axios from 'axios';

const baseUrl = 'http://localhost:4000';

export const client = new ApolloClient({
    uri: `${baseUrl}/graphql`
});

export default axios.create({
    baseURL: baseUrl,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
});