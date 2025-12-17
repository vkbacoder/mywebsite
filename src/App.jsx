import  Navbar from "./components/Navbar";  
import Home from "./components/Home";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contacts from "./components/Contacts";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <div>
      <CursorGlow />
      <Navbar/>
      <Home/>
      <Project/>
      <Skill/>
      <Contacts/>
    </div>
  );
}

export default App;
