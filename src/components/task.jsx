// Task.js
import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>{task.name}</h3>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;

