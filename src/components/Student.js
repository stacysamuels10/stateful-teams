import React from "react";

export default function Student({ student }) {
  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <img className="student-pic" src={student.img} alt="" />
      <div>
        <button>Binary Bots</button>
        <button>BC Crew</button>
      </div>
    </div>
  );
}
