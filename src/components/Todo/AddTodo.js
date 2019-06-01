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
                                <div className="ui transparent fluid left input">
                                    <input
                                        placeholder="Hey, what needs to be done?"
                                        onChange={event => this.handleInputChange(event)}
                                        value={this.state.title}
                                    />
                                    {/* <i className=" red plus icon"></i> */}
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