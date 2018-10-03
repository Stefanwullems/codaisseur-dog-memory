import { combineReducers } from "redux";
import showPL from "./showPL";
import averageScore from "./average-score";
import dogData from "./dogData";
import SCD from "./SCD"

export default combineReducers({ showPL, dogData, averageScore, SCD});
