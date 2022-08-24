import "./App.css";
import MainContainer from "./components/MainContainer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import studentFunctions from "./reducers/rootReducer";

function App() {
  console.log(studentFunctions);
  const students = useSelector((state) => state.studentFunctions.students);
  const frontend = useSelector((state) => state.studentFunctions.frontend);
  const backend = useSelector((state) => state.studentFunctions.backend);
  const setStudent = useSelector((state) => state.studentFunctions.setStudent);
  const dispatch = useDispatch();
  return (
    <div className="topcontainer">
      <h1>Student Team React Challenge</h1>
      <button className="button-24" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
      <input
        type="text"
        name="addStudent"
        onChange={(e) =>
          dispatch({ type: "SET_STUDENT", payload: e.target.value })
        }
        placeholder="Add a New Student"
      />
      <button
        className="button-24"
        onClick={() =>
          dispatch({
            type: "ADD_NEW_STUDENT",
            payload: setStudent,
          })
        }
      >
        Add a New Student
      </button>
      <div className="App">
        <MainContainer
          students={students}
          frontend={frontend}
          backend={backend}
        />
      </div>
    </div>
  );
}

export default App;
