import SideBar from './Components/SideBar';
import AddProject from './Components/AddProject';
import Home from './Components/Home.jsx';
import { useState } from 'react';
import SelectProject from './Components/SelectProject.jsx';

function App() {
  const [ProjectState, SetProjectState] = useState({
    selectedPRoject: undefined,
    projects: []
  });

  function handleSelectProject(id) {
    SetProjectState(prevState => {
      return {
        ...prevState,
        selectedPRoject: id,
      };
    });
  }

  function handleClick() {
    SetProjectState(prevState => {
      return {
        ...prevState,
        selectedPRoject: null,
      };
    });
  }

  function handleCancel() {
    SetProjectState(prevState => {
      return {
        ...prevState,
        selectedPRoject: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    SetProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(),
        dueDate: new Date(projectData.dueDate) // Ensure this is a valid date
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedPRoject: undefined
      };
    });
  }

  function handleDeleteProject(id) {
    SetProjectState(prevState => {
      return {
        ...prevState,
        projects: prevState.projects.filter(project => project.id !== id),
        selectedPRoject: undefined
      };
    });
  }

  const selectedProject = ProjectState.projects.find(project => project.id === ProjectState.selectedPRoject);

  let content = <SelectProject project={selectedProject} handleDelete={() => handleDeleteProject(ProjectState.selectedPRoject)} />;
  if (ProjectState.selectedPRoject === null) {
    content = (<AddProject onAdd={handleAddProject} onCancel={handleCancel} />);
  } else if (ProjectState.selectedPRoject === undefined) {
    content = <Home onStart={handleClick} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar 
        onStart={handleClick}
        projects={ProjectState.projects} 
        onSelect={handleSelectProject} 
        selectedPRoject={ProjectState.selectedPRoject} 
      />
      {content}
    </main>
  );
}

export default App;
