
import SideBar from './Components/SideBar';
import AddProject from './Components/AddProject';
import Home from './Components/Home.jsx'
import { useState } from 'react';
function App() {
  const [ProjectState, SetProjectState]=useState({
  
    selectedPRoject: undefined,
    projects :[]
  });
  function handleClick (){
    SetProjectState(prevState => {
      return {
        ...prevState,
        selectedPRoject : null ,
      }
    });
  }
  function handleCancel(){
    SetProjectState(prevState => {
      return {
        ...prevState,
        selectedPRoject : undefined ,
      }
    }); 


  }
function handleAddProject(projectData){
SetProjectState(prevState => {
  const newProject ={
...projectData,
id:Math.random()
  }
  return {
    ...prevState,
    projects :[...prevState.projects,newProject],
    selectedPRoject: undefined
  }
})
}

  let content ;
  if(ProjectState.selectedPRoject ===null){
    content =<AddProject onAdd={handleAddProject} onCancel={handleCancel}/>
  }else if(ProjectState.selectedPRoject ===undefined) {
    content =  <Home onStart = {handleClick}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStart = {handleClick} projects={ProjectState.projects}/>
      {content}
     
   
     
    </main>
  );
}

export default App;
