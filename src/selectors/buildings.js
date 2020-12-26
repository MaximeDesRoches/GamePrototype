import { createSelector } from "@reduxjs/toolkit";
import { MULTIPLIER } from "../Constants";
import { upgradesPerBuildingTypeSelector } from "./upgrades";

export const buildingsStateSelector = (state) => state.buildings;
const typePropSelector = (state, props) => props.type;

function calculate(building, upgrades = []) {
	const modifier =
		upgrades.reduce((c, v) => {
			return c + v.amount;
		}, 1) || 1;

	return {
		...building,
		rate: building.baseRate * modifier,
		cost: parseFloat(
			(building.baseCost * Math.pow(MULTIPLIER, building.qty)).toFixed(2)
		)
	};
}

export const buildingSelector = createSelector(
	[buildingsStateSelector, typePropSelector, upgradesPerBuildingTypeSelector],
	(buildings, type, upgrades) => {
		return buildings[type] ? calculate(buildings[type], upgrades) : null;
	}
);
