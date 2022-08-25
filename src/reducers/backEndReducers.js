import initialState from "./initialState";

const backEndReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BACK_END_DEFAULT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student !== action.payload
        ),
      };
    case "ADD_TO_BACK_END_BACK_END":
      return {
        frontend: state.frontend.filter(
          (student) => student !== action.payload
        ),
      };
    case "ADD_TO_BACK_END_FRONT_END":
      return { backend: [...state.backend, action.payload] };
    case "RESET":
      state = initialState;
      return state;
    default:
      return state;
  }
};

export default backEndReducer;
