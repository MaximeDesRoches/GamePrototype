import { combineReducers } from "redux";
import points from "../redux/points";
import buildings from "../redux/buildings";
import upgrades from "../redux/upgrades";
import controls from "../redux/controls";

const rootReducer = combineReducers({
	points,
	buildings,
	upgrades,
	controls
});

export default rootReducer;
