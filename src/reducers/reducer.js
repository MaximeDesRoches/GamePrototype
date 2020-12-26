import { combineReducers } from "redux";
import points from "../redux/points";
import buildings from "../redux/buildings";
import upgrades from "../redux/upgrades";

const rootReducer = combineReducers({
	points,
	buildings,
	upgrades
});

export default rootReducer;
