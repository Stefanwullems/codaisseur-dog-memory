import { combineReducers } from "redux";
import showPL from "./showPL";
import averageScore from "./average-score";
import dogData from "./dogData";
import SCD from "./SCD";
import showWarningNotification from "./showWarningNotification";

export default combineReducers({
  showPL,
  dogData,
  averageScore,
  SCD,
  showWarningNotification
});
