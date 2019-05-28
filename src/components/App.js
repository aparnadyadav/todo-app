import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import AddTodo from './Todo/AddTodo';
import TodoList from './Todo/TodoList';
import Header from './Header';

const createApolloClient = authToken => {
    return new ApolloClient({
        uri: 'https://todo-list-tool.herokuapp.com/v1alpha1/graphql',
        headers: {
            Authorization: `Bearer ${authToken}`
        },
    });
}

class App extends React.Component {
    // componentDidMount() {
    //     console.log(localStorage.getItem('isLoggedIn'));
    //     const { renewSession } = this.props.auth;
    
    //     if (localStorage.getItem('isLoggedIn') === 'true') {
    //       renewSession();
    //     }
    // }

    render() {
        const client = createApolloClient(this.props.auth.idToken);

        return (
            <ApolloProvider client={client}>
                <div>
                    <Header auth={this.props.auth} {...this.props} />
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
}

export default App;