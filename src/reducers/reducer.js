import { combineReducers } from "redux";
import points from "../redux/points";
import buildings from "../redux/buildings";

const rootReducer = combineReducers({
  points,
  buildings
});

export default rootReducer;
