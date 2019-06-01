import React, { Component, Fragment } from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterTodos from './FilterTodos';

class TodoWrapper extends Component {
    state = { filter: 'ALL' };

    setVisibilityFilter = filter => {
        this.setState({
            filter
        })
    }

    render() {
        return (
            <Fragment>
                <div className="ui raised segments">
                    <div className="ui segment">
                        <AddTodo />
                    </div>
                    <div className="ui secondary segment">
                        <TodoList filter={this.state.filter} />
                    </div>
                </div>
                <div className="ui segment" id="filters">
                    <FilterTodos setVisibilityFilter={this.setVisibilityFilter} />
                </div>
            </Fragment>
        );
    }
}

export default TodoWrapper;