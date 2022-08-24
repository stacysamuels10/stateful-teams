import West from "../assets/westithink.png";
import jason from "../assets/jason.png";
import ramen from "../assets/ramen.png";
import olivia from "../assets/olivia.png";
import andrea from "../assets/andrea.png";
import ethan from "../assets/ethan.png";
import amanda from "../assets/amanda.png";
import coolstacy from "../assets/coolstacy.png";
import blake from "../assets/blake.png";
import carlos from "../assets/carlos.png";
import Joe from "../assets/Joe.jpeg";
const initialState = {
  students: [
    { name: "West", img: West },
    { name: "Rahmin", img: ramen },
    { name: "Olivia", img: olivia },
    { name: "Jason", img: jason },
    { name: "Ethan", img: ethan },
    { name: "Amanda", img: amanda },
    { name: "Andrea", img: andrea },
    { name: "Stacy", img: coolstacy },
    { name: "Carlos", img: carlos },
    { name: "Blake", img: blake },
  ],
  frontend: [],
  backend: [],
  setStudent: {
    name: "",
    img: Joe,
  },
};

const studentFunctions = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FRONT_END":
      return {
        ...state,
        students: state.students.filter(
          (student) => student !== action.payload
        ),
        frontend: [...state.frontend, action.payload],
        backend: state.backend.filter((student) => student !== action.payload),
      };
    case "ADD_TO_BACK_END":
      return {
        ...state,
        students: state.students.filter(
          (student) => student !== action.payload
        ),
        frontend: state.frontend.filter(
          (student) => student !== action.payload
        ),
        backend: [...state.backend, action.payload],
      };
    case "SET_STUDENT":
      return { ...state, setStudent: { name: action.payload, img: Joe } };
    case "ADD_NEW_STUDENT":
      initialState.students.push(action.payload);
      state = initialState;
      return state;
    case "RESET":
      state = initialState;
      return state;
    default:
      return state;
  }
};

export default studentFunctions;
