import React from 'react';

import ToggleTodo from './ToggleTodo';
import DeleteTodo from './DeleteTodo';
import '../../styles/App.css';

const TodoItem = ({ todo }) => {
    const { title, id, is_completed } = todo;
    return (
        <div className="item">
            <div className="left floated content">
                <ToggleTodo id={id} is_completed={is_completed} />
            </div>

            <div className={"title" + (todo.is_completed ? " completed" : '')}>
                <div>
                    {title}
                </div>
            </div>

            <div className="right floated content">
                <DeleteTodo task={title} id={id} />
            </div>
        </div>
    );
}

export default TodoItem;