import { combineReducers } from "redux";
import showPL from "./showPL";
import averageScore from "./average-score";
import dogData from "./dogData";
import currentDogs from "./currentDogs";
import warning from "./warning";
import fetchedDogs from './fetched-dogs'
import fetchedImages from './fetched-images'


export default combineReducers({
  fetchedImages,
  fetchedDogs,
  showPL,
  dogData,
  averageScore,
  currentDogs,
  warning
});
