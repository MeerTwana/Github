
import SideBar from './Components/SideBar';
import AddProject from './Components/AddProject';
import Home from './Components/Home.jsx'
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar/>
      <Home/>
      <AddProject/>
     
    </main>
  );
}

export default App;
