import SideBar from './Components/SideBar';
import AddProject from './Components/AddProject';
import Home from './Components/Home.jsx';
import { useState } from 'react';
import SelectProject from './Components/SelectProject.jsx';

// Main App component
function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined, // The currently selected project
    projects: [],               // List of all projects
    tasks: {},                  // Dictionary to store tasks by project ID
  });

  // Function to add a task to the selected project
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProject,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: {
          ...prevState.tasks,
          [prevState.selectedProject]: [
            ...(prevState.tasks[prevState.selectedProject] || []),
            newTask,
          ],
        },
      };
    });
  }

  // Function to delete a task from the selected project
  function handleDeleteTask(taskId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: {
          ...prevState.tasks,
          [prevState.selectedProject]: prevState.tasks[
            prevState.selectedProject
          ].filter((task) => task.id !== taskId),
        },
      };
    });
  }

  // Function to select a project
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  // Function to deselect the current project
  function handleClick() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  // Function to cancel project selection
  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  // Function to add a new project
  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
        dueDate: new Date(projectData.dueDate),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProject: undefined,
      };
    });
  }

  // Function to delete a project
  function handleDeleteProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter((project) => project.id !== id),
        selectedProject: undefined,
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );

  let content = (
    <SelectProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      project={selectedProject}
      tasks={projectState.tasks[projectState.selectedProject] || []}
      onDeleteProject={() =>
        handleDeleteProject(projectState.selectedProject)
      }
    />
  );

  if (projectState.selectedProject === null) {
    content = <AddProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.selectedProject === undefined) {
    content = <Home onStart={handleClick} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onStart={handleClick}
        projects={projectState.projects}
        onSelect={handleSelectProject}
        selectedProject={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
