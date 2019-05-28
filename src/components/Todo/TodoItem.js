import React from 'react';
import DeleteTodo from './DeleteTodo';

const TodoItem = ({ title, deleteTask}) => {
    return (
        <div className="item">
            {title}
            <div className="right floated content">
                <DeleteTodo task={title} deleteTask={deleteTask} />
            </div>
        </div>
    );
}

export default TodoItem;