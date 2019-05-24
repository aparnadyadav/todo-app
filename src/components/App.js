import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import AddButton from './AddButton';
import TodoList from './TodoList';
import Header from './Header';

const client = new ApolloClient({
    uri: 'https://todo-list-tool.herokuapp.com/v1alpha1/graphql'
});

class App extends React.Component {
    state = { tasks: [] };

    addTask = task => {
        this.setState({ tasks: [...this.state.tasks,task] })
    }

    deleteTask = task => {
        this.setState(state => {
            const tasks = this.state.tasks.filter((item) => {
                return item !== task;
            });

            return { tasks };
        });
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    <Header auth={this.props.auth} {...this.props} />
                    <AddButton addTask={this.addTask} />
                    <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
                </div>
            </ApolloProvider>
        );
    }
}

export default App;