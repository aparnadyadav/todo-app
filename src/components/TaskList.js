import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask }) => {
   var renderedList = tasks.map((task, id) => {
       return <Task key={id} task={task} deleteTask={deleteTask} />
   })

   return <ul className="ui list">{renderedList}</ul>;
}

export default TaskList;