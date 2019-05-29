import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import GET_TODOS from '../../queries/getTodos';

class AddTodo extends Component {
    state = { title: '' }; 

    handleFormSubmit = (event, addTodo) => {
        event.preventDefault();
        addTodo({
            variables: {
                title: this.state.title
            }
        }).then(() => this.setState({ title: '' }));
    }

    handleInputChange = event => {
        this.setState({ title: event.target.value })
    }

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
                                onSubmit={event => this.handleFormSubmit(event, addTodo)}
                            >
                                <div className="ui fluid action input field">
                                    <input
                                        placeholder="Add task..."
                                        onChange={event => this.handleInputChange(event)}
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