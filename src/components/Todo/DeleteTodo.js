import React from 'react';

const DeleteTodo = ({ task, deleteTask }) => {

    const onButtonClick = () => {
        deleteTask(task);
    }

    return (
        <span>
            <i className="trash icon" onClick={onButtonClick}></i>
        </span>
    );
}

export default DeleteTodo;