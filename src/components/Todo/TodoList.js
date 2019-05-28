import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import TodoItem from './TodoItem';

const GET_TODOS = gql`
    {
        todos {
            id
            title
        }
    }
`;

const TodoList = ( ) => {
   let renderedList = (todos) => {
        return todos.map(todo => {
            console.log(todo);
            return <TodoItem key={todo.id} title={todo.title} />;
        });
    }

   return (
        <Query query={GET_TODOS}>
            {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;
                console.log(data);
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