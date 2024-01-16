import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span>{task.name}</span>
          <span>{task.dateAdded}</span>
          <span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
