import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import GET_TODOS from '../../queries/getTodos';

class AddTodo extends Component {
    state = { title: '' }; 

    render() {
        return (
            <Mutation 
                mutation={ADD_TODO}
                refetchQueries={[{ query: GET_TODOS }]}
            >
                {(addTodo, { data }) => {
                    return (
                        <div>
                            <form
                                className="ui form"
                                onSubmit={event => {
                                    event.preventDefault();
                                    addTodo({
                                        variables: { 
                                            title: this.state.title
                                        },
                                    }).then(() => this.setState({ title: '' }));
                                }}
                            >
                                <div className="ui fluid action input field">
                                    <input
                                        placeholder="Add task..."
                                        onChange={event => this.setState({ title: event.target.value })}
                                        value={this.state.title}
                                    />
                                    <button type="submit" className="ui button">
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div> 
                    );
                }}
            </Mutation>
        );
    }
    
}

const ADD_TODO = gql`
    mutation InsertTodos($title: String!) {
        insert_todos(objects: { title: $title }) {
            returning {
                id
                title
            }
        }
    }
`;

export default AddTodo;