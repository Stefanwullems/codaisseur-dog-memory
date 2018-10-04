import { combineReducers } from "redux";
import showPL from "./showPL";
import averageScore from "./average-score";
import dogData from "./dogData";
import currentDogs from "./current-dogs";
import warning from "./warning";
import level from "./level";
import possibleDogs from "./possible-dogs";
import currentDog from "./current-dog";
import possibleDogsLength from "./possible-dogs-length";
import streak from "./streak";


export default combineReducers({
  possibleDogsLength,
  currentDog,
  possibleDogs,
  showPL,
  dogData,
  averageScore,
  currentDogs,
  warning,
  level,
  streak
});
