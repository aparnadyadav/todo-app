import React, { Component } from 'react';
import { Query } from 'react-apollo';

import GET_TODOS from '../../queries/getTodos';
import TodoItem from './TodoItem';

class TodoList extends Component {
    renderedList = todos => {
        const { filter } = this.props;
        let filteredTodos = [];

        if (filter === "COMPLETED") {
            filteredTodos = todos.filter(todo =>  todo.is_completed === true);
        } else if (filter === "ACTIVE") {
            filteredTodos = todos.filter(todo =>  todo.is_completed !== true);
        } else {
            filteredTodos = todos;
        }

        return filteredTodos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />;
        });
    }

    render() {
        return (
            <Query query={GET_TODOS}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    return (
                        <div className="ui very relaxed divided list" style={{ listStyleType: 'none' }}>
                            {this.renderedList(data.todos)}
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default TodoList;
