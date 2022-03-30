import BcCrew from "./BcCrew";
import BinaryBots from "./BinaryBots";
import DefaultTeam from "./DefaultTeam";

export default function MainContainer({ students }) {
  return (
    <>
      <BcCrew />
      <DefaultTeam students={students} />
      <BinaryBots />
    </>
  );
}
