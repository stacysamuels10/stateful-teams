import "./App.css";
import MainContainer from "./components/MainContainer";
import { useState } from "react";
import ciara from "./assets/ciara.png";
import jason from "./assets/jason.png";
import rayleigh from "./assets/rayleigh.png";
import santos from "./assets/santos.png";

function App() {
  const studentData = [
    { name: "Ciara", img: ciara },
    { name: "Rayleigh", img: rayleigh },
    { name: "Santos", img: santos },
    { name: "Jason", img: jason },
  ];
  const [students, setStudents] = useState(studentData);
  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <button
        onClick={() =>
          console.log("I should reset you back to all being in default")
        }
      >
        Reset
      </button>
      <div className="App">
        <MainContainer students={students} />
      </div>
    </div>
  );
}

export default App;
