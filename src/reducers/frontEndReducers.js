import initialState from "./initialState";

const frontEndReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FRONT_END_DEFAULT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student !== action.payload
        ),
      };
    case "ADD_TO_FRONT_END_FRONT_END":
      return { frontend: [...state.frontend, action.payload] };
    case "ADD_TO_FRONT_END_BACK_END":
      return {
        backend: state.backend.filter((student) => student !== action.payload),
      };
    case "RESET":
      state = initialState;
      return state;
    default:
      return state;
  }
};

export default frontEndReducer;
