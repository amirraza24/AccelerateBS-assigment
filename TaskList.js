import React, { useState } from 'react';

function TaskList({ project }) {
  const [tasks, setTasks] = useState(project.tasks);
  const [newTaskName, setNewTaskName] = useState('');

  const handleNewTaskNameChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, { name: newTaskName, timeSpent: 0 }]);
    setNewTaskName('');
  };

  return (
    <div>
      <h2>Tasks for {project.name}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} ({task.timeSpent} hours)
          </li>
        ))}
      </ul>
      <form onSubmit={handleNewTaskSubmit}>
        <label>
          New Task Name:
          <input type="text" value={newTaskName} onChange={handleNewTaskNameChange} />
        </label>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default TaskList;
