import React from 'react';
import DeleteButton from './DeleteButton';

const Task = ({ task, deleteTask}) => {
    return (
        <li>
            {task}
            <DeleteButton task={task} deleteTask={deleteTask} />
        </li>
    );
}

export default Task;