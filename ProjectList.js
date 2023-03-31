import React, { useState } from 'react';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');

  const handleNewProjectNameChange = (event) => {
    setNewProjectName(event.target.value);
  };

  const handleNewProjectSubmit = (event) => {
    event.preventDefault();
    setProjects([...projects, { name: newProjectName, tasks: [] }]);
    setNewProjectName('');
  };

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project.name}</li>
        ))}
      </ul>
      <form onSubmit={handleNewProjectSubmit}>
        <label>
          New Project Name:
          <input type="text" value={newProjectName} onChange={handleNewProjectNameChange} />
        </label>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default ProjectList;
