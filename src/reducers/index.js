import { combineReducers } from "redux";
import useReducer  from "./userReducer";

const rootReducer = combineReducers({
    userState: useReducer,
});

export default rootReducer;