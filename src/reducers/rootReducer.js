import { combineReducers } from "redux";
import studentFunctions from "./studentReducers";
const rootReducer = combineReducers({ studentFunctions: studentFunctions });

export default rootReducer;
