import React from 'react';
import { Query } from 'react-apollo';

import GET_TODOS from '../../queries/getTodos';
import TodoItem from './TodoItem';

const TodoList = ( ) => {
   let renderedList = (todos) => {
        return todos.map(todo => {
            return <TodoItem key={todo.id} title={todo.title} />;
        });
    }

   return (
        <Query query={GET_TODOS}>
            {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;
                return (
                    <div className="ui very relaxed divided list" style={{ listStyleType: 'none' }}>
                        {renderedList(data.todos)}
                    </div>
                );
            }}
        </Query>
   );
}

export default TodoList;