import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// Router
import {BrowserRouter} from "react-router-dom";

// GraphQL provider
import { ApolloProvider } from '@apollo/react-hooks';
import client from "./api";

// Redux Provider
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './state/reducers';


const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>
    </BrowserRouter>,document.getElementById('root')
);
