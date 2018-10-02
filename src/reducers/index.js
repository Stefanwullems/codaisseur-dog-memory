import { combineReducers } from "redux";
import showPL from "./showPL";
import addDogsToStore from './addDogToStore'
import averageScore from "./average-score";

export default combineReducers({ showPL,addDogsToStore, averageScore });

