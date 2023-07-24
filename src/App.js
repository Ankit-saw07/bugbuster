import { AllRoutes } from './AllRoutes';
import './App.css';
import { Navbar } from './Components/Navbar';
// import {} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
