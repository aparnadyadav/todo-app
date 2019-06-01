import React, { Component, Fragment } from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import GET_TODOS from '../../queries/getTodos';
import '../../styles/App.css';

class ToggleTodo extends Component {
    handleInputChange = toggleTodo => {
        const { id, is_completed } = this.props;

        toggleTodo({
            variables: {
                id,
                is_completed: !is_completed
            }
        })
    }

    render() {
        const { id, is_completed } = this.props;
        
        return (
            <Mutation mutation={TOGGLE_TODO} refetchQueries={[{ query: GET_TODOS }]}>
                {(toggleTodo) => {
                    return (
                        <Fragment>
                            <input
                                checked={is_completed}
                                type="checkbox"
                                id={id}
                                className="form-checkbox"
                                onChange={() => this.handleInputChange(toggleTodo)}
                            />
                            <label htmlFor={id} />
                        </Fragment>
                    );
                }}
            </Mutation>
        );
    }
}

const TOGGLE_TODO = gql`
    mutation UpdateTodos($id: Int!, $is_completed: Boolean!) {
        update_todos(where: {id: {_eq: $id}}, _set: {is_completed: $is_completed}) {
            affected_rows
        }
    }
`;

export default ToggleTodo;