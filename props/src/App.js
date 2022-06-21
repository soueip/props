
import './App.css';
import Profile from "./profile/Profile";

function App() {
  const Name="mohamed souei";
  const Bio="i have 23 years old ";
  const Prof="studentn";
  const handleAlert =(x)=>alert(x);
  return (




    <div className="App">
      
      <Profile Name={Name} Bio={Bio} prof={Prof} handleAlert={handleAlert}/>
    </div>
  );
}

export default App;
