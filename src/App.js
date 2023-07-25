import { AllRoutes } from './AllRoutes';
import './App.css';
import {Navbar} from "./Components/Navbar";
import {Slider1} from "./Components/Slider1";
// import {} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Slider1/>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
