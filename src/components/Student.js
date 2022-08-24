import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Student({ student }) {
  const dispatch = useDispatch();
  const frontend = useSelector((state) => state.studentFunctions.frontend);
  const backend = useSelector((state) => state.studentFunctions.backend);
  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <img className="student-pic" src={student.img} alt="" />
      <div>
        <button
          className={`button-24 ${frontend.includes(student) ? "hide" : ""}`}
          onClick={() =>
            dispatch({ type: "ADD_TO_FRONT_END", payload: student })
          }
        >
          Front Enders 4 Lyfe
        </button>
        <button
          className={`button-24 ${backend.includes(student) ? "hide" : ""}`}
          onClick={() =>
            dispatch({ type: "ADD_TO_BACK_END", payload: student })
          }
        >
          In the Backend, it totally matters
        </button>
      </div>
    </div>
  );
}
