import { combineReducers } from "redux";
import showPL from "./showPL";
import averageScore from "./average-score";
import dogData from "./dogData";

export default combineReducers({ showPL, dogData, averageScore });
