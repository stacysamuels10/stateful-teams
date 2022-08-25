import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  frontEndBackEnd,
  frontEndDefault,
  frontEndFrontEnd,
} from "../actions/setFrontEnd";
import {
  backEndBackEnd,
  backEndFrontEnd,
  backEndDefault,
} from "../actions/setBackEnd";

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
            dispatch(
              frontEndBackEnd,
              frontEndDefault,
              frontEndFrontEnd,
              student
            )
          }
        >
          Front Enders 4 Lyfe
        </button>
        <button
          className={`button-24 ${backend.includes(student) ? "hide" : ""}`}
          onClick={() =>
            dispatch(backEndBackEnd, backEndDefault, backEndFrontEnd, student)
          }
        >
          In the Backend, it totally matters
        </button>
      </div>
    </div>
  );
}
