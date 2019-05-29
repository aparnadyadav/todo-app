import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import AddTodo from './Todo/AddTodo';
import TodoList from './Todo/TodoList';
import Header from './Header';

const authToken = localStorage.getItem('idToken');
const client = new ApolloClient({
    uri: 'https://todo-list-tool.herokuapp.com/v1alpha1/graphql',
    headers: {
        Authorization: `Bearer ${authToken}`
    },
});

const App = props => {
    return (
        <ApolloProvider client={client}>
            <div>
                <Header auth={props.auth} {...props} />
                <div className="ui container">
                    <div className="ui divided relaxed grid">
                        <div className="row">
                            <div className="five wide column">
                            </div>
                            <div className="eleven wide column">
                                <AddTodo />
                                <TodoList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ApolloProvider>
    );
}

export default App;