
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
  let content ;
  if(ProjectState.selectedPRoject ===null){
    content =<AddProject/>
  }else if(ProjectState.selectedPRoject ===undefined) {
    content =  <Home onStart = {handleClick}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStart = {handleClick}/>
      {content}
     
   
     
    </main>
  );
}

export default App;
