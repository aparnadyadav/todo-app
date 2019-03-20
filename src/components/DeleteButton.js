import React from 'react';

const DeleteButton = ({ task, deleteTask }) => {

    const onButtonClick = () => {
        deleteTask(task);
    }

    return (
        <span>
            <button className="ui button" onClick={onButtonClick}>
                Delete
            </button>
        </span>
    );
}

export default DeleteButton;