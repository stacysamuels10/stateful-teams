export const backEndDefault = (dispatch, student) => {
  dispatch({ type: "ADD_TO_BACK_END_DEFAULT", payload: student });
};

export const backEndFrontEnd = (dispatch, student) => {
  dispatch({ type: "ADD_TO_BACK_END_FRONT_END", payload: student });
};

export const backEndBackEnd = (dispatch, student) => {
  dispatch({ type: "ADD_TO_BACK_END_BACK_END", payload: student });
};
