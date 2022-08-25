export const addValue = (dispatch, text) => {
  dispatch({ type: "SET_STUDENT", payload: text });
};

export const addStudent = (dispatch, setStudent) => {
  dispatch({ type: "ADD_NEW_STUDENT", payload: setStudent });
};
