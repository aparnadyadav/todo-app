import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Header from './Header';
import TodoWrapper from './Todo/TodoWrapper';

const App = props => {
    const authToken = localStorage.getItem('idToken');
    const client = new ApolloClient({
        uri: 'https://todo-list-tool.herokuapp.com/v1alpha1/graphql',
        headers: {
            Authorization: `Bearer ${authToken}`
        },
    });

    return (
        <ApolloProvider client={client}>
            <div>
                <Header auth={props.auth} {...props} />
                <div className="ui container">
                    <TodoWrapper />
                </div>
            </div>
        </ApolloProvider>
    );
}

export default App;