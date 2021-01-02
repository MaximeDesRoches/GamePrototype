import { createSelector } from "@reduxjs/toolkit";
import { MULTIPLIER } from "../Constants";
import { upgradesPerBuildingTypeSelector } from "./upgrades";
import b from "../objects/buildings";

export const buildingsStateSelector = () => b;
const buildingQuantitiesSelector = (state) => state.buildings.quantities;
const typePropSelector = (state, props) => props.type;

function calculate(building, qty, upgrades = []) {
	const modifier =
		upgrades.reduce((c, v) => {
			return c + v.amount;
		}, 1) || 1;

	return {
		...building,
		rate: building.baseRate * modifier,
		qty,
		cost: parseFloat(
			(building.baseCost * Math.pow(MULTIPLIER, qty)).toFixed(2)
		)
	};
}

export const buildingsSelector = createSelector(
	[
		buildingsStateSelector,
		buildingQuantitiesSelector,
		upgradesPerBuildingTypeSelector
	],
	(buildings, quantities, upgrades) => {
		const b = {};
		Object.keys(buildings).forEach((type) => {
			b[type] = calculate(
				buildings[type],
				quantities[type] || 0,
				upgrades
			);
		});

		return b;
	}
);

export const buildingSelector = createSelector(
	[buildingsSelector, typePropSelector],
	(buildings, type) => {
		return buildings[type];
	}
);
