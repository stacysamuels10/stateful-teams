import { combineReducers } from "redux";
import inputStudent from "./inputStudentReducer";
import frontEndReducer from "./frontEndReducers";
import backEndReducer from "./backEndReducers";

const rootReducer = combineReducers({
  inputStudent: inputStudent,
  frontEndReducer: frontEndReducer,
  backEndReducer: backEndReducer,
});

export default rootReducer;
