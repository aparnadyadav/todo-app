import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import GET_TODOS from '../../queries/getTodos';

class DeleteTodo extends Component {
    handleIconClick = deleteTodo => {
        const { id } = this.props;

        deleteTodo({
            variables: {
                id
            }
        });
    }

    render() {
        return (
            <Mutation mutation={DELETE_TODO} refetchQueries={[{ query: GET_TODOS }]}>
                {deleteTodo => {
                    return (
                        <div className="ui icon">
                            <i className="trash icon" onClick={() => this.handleIconClick(deleteTodo)}></i>
                        </div>
                    );           
                }}
            </Mutation>
        );
    }
}

const DELETE_TODO = gql`
    mutation DeleteTodos($id: Int!) {
        delete_todos(where: {id: {_eq: $id}}) {
            affected_rows
        }
    }
`;

export default DeleteTodo;