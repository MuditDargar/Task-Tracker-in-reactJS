import React, { useState } from 'react';
import './TaskForm.css'; 
const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        dateAdded: new Date().toLocaleDateString(),
        completed: false,
      };
      addTask(newTask);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
