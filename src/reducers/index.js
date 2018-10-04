import { combineReducers } from "redux";
import showPL from "./showPL";
import averageScore from "./average-score";
import dogData from "./dogData";
import currentDogs from "./currentDogs";
import warning from "./warning";

export default combineReducers({
  showPL,
  dogData,
  averageScore,
  currentDogs,
  warning
});
