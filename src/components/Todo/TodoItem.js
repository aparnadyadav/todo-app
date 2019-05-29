import React from 'react';
import DeleteTodo from './DeleteTodo';

const TodoItem = ({ title, id }) => {
    return (
        <div className="item">
            {title}
            <div className="right floated content">
                <DeleteTodo task={title} id={id} />
            </div>
        </div>
    );
}

export default TodoItem;