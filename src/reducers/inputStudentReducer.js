import initialState from "./initialState";
import Joe from "../assets/Joe.jpeg";

const inputStudent = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STUDENT":
      return { ...state, setStudent: { name: action.payload, img: Joe } };
    case "ADD_NEW_STUDENT":
      initialState.students.unshift(action.payload);
      state = initialState;
      return state;
    case "RESET":
      state = initialState;
      return state;
    default:
      return state;
  }
};

export default inputStudent;
