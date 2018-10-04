import { combineReducers } from "redux";
import showPL from "./showPL";
import averageScore from "./average-score";
import dogData from "./dogData";
import currentDogs from "./currentDogs";
import warning from "./warning";
import level from "./level";

export default combineReducers({
  showPL,
  dogData,
  averageScore,
  currentDogs,
  warning,
  level
});
