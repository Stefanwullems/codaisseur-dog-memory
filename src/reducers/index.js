import { combineReducers } from "redux";
import showPL from "./showPL";
import averageScore from "./average-score";

export default combineReducers({ showPL, averageScore });
