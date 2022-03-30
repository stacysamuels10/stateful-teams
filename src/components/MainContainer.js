import { useState } from "react";
import BcCrew from "./BcCrew";
import BinaryBots from "./BinaryBots";
import DefaultTeam from "./DefaultTeam";
import ciara from "../assets/ciara.png";
import jason from "../assets/jason.png";
import rayleigh from "../assets/rayleigh.png";
import santos from "../assets/santos.png";

export default function MainContainer({ students }) {
  return (
    <>
      <BcCrew />
      <DefaultTeam students={students} />
      <BinaryBots />
    </>
  );
}
