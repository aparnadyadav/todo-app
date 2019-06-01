import React, { Component, Fragment } from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

class TodoWrapper extends Component {
    render() {
        return (
            <Fragment>
                <div className="ui raised segments">
                    <div className="ui segment">
                        <AddTodo />
                    </div>
                    <div className="ui secondary segment">
                        <TodoList />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TodoWrapper;