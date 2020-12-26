import { createSelector } from "@reduxjs/toolkit";

export const upgradesStateSelector = (state) => state.upgrades;
const typePropSelector = (state, props) => props.type;

export const upgradeSelector = createSelector(
	[upgradesStateSelector, typePropSelector],
	(upgrades, type) => {
		return upgrades[type] ? upgrades[type] : null;
	}
);

export const upgradesPerBuildingTypeSelector = createSelector(
	[upgradesStateSelector, typePropSelector],
	(upgrades, buildingType) => {
		return Object.values(upgrades)
			.filter((u) => u.owned)
			.filter((u) => u.building === buildingType);
	}
);
