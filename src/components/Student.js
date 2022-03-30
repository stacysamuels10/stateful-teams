import React from "react";

export default function Student({ student }) {
  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <img className="student-pic" src={student.img} alt="" />
      <div>
        <button className="button-24">Binary Bots</button>
        <button className="button-24">BC Crew</button>
      </div>
    </div>
  );
}
