import React from 'react';

import ToggleTodo from './ToggleTodo';
import DeleteTodo from './DeleteTodo';
import '../../styles/App.css';

const TodoItem = ({ todo }) => {
    const { title, id, is_completed } = todo;
    return (
        <div className="item">
            <div className="right floated content">
                <DeleteTodo task={title} id={id} />
            </div>

            <ToggleTodo id={id} is_completed={is_completed} />
            
            <div className={`title ${todo.is_completed ? 'completed' : ''}`}>
                {title}
            </div>
        </div>
    );
}

export default TodoItem;