import { combineReducers } from "redux";
import showPL from "./showPL";
import averageScore from "./average-score";
import dogData from "./dogData";
import currentDogs from "./current-dogs";
import warning from "./warning";
import fetchedDogs from './fetched-dogs'
import fetchedImages from './fetched-images'
import possibleDogs from './possible-dogs'
import currentDog from './current-dog';


export default combineReducers({
  currentDog,
  possibleDogs,
  fetchedImages,
  fetchedDogs,
  showPL,
  dogData,
  averageScore,
  currentDogs,
  warning
});
