export const frontEndDefault = (dispatch, student) => {
  dispatch({ type: "ADD_TO_FRONT_END_DEFAULT", payload: student });
};

export const frontEndFrontEnd = (dispatch, student) => {
  dispatch({ type: "ADD_TO_FRONT_END_FRONT_END", payload: student });
};

export const frontEndBackEnd = (dispatch, student) => {
  dispatch({ type: "ADD_TO_FRONT_END_BACK_END", payload: student });
};
