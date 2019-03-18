import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
   var renderedList = tasks.map((task, id) => {
       return <Task key={id} task={task} />
   })

   return <ul>{renderedList}</ul>;
}

export default TaskList;