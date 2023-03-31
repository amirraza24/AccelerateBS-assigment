import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import TaskList from './components/TaskList';
import TimeTracker from './components/TimeTracker';

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNewProject = (name) => {
    setProjects([...projects, { name, tasks: [] }]);
  };

  const handleNewTask = (projectName, taskName, elapsedTime) => {
    const updatedProjects = projects.map((project) => {
      if (project.name === projectName) {
        return {
          ...project,
          tasks: [...project.tasks, { name: taskName, time: elapsedTime }],
        };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return (
    <div>
      {!selectedProject ? (
        <div>
          <h2>Projects</h2>
          <ProjectList projects={projects} onNewProject={handleNewProject} onSelectProject={setSelectedProject} />
        </div>
      ) : (
        <div>
          <h2>{selectedProject.name} Tasks</h2>
          <TaskList tasks={selectedProject.tasks} />
          <TimeTracker projectName={selectedProject.name} onNewTask={handleNewTask} />
          <button onClick={() => setSelectedProject(null)}>Back to Projects</button>
        </div>
      )}
    </div>
  );
}

export default App;
