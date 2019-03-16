import { combineReducers } from "redux";
import powerStatus from "./powerStatus";
import setSound from "./setSound";

export default combineReducers({
  powerStatus,
  setSound
});
