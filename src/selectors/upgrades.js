import { createSelector } from "@reduxjs/toolkit";
import u from "../objects/upgrades";

export const upgradesStateSelector = () => u;
const upgradesOwnedSelector = (state) => state.upgrades.owned;
const typePropSelector = (state, props) => props?.type;

export const upgradesSelector = createSelector(
	[upgradesStateSelector, upgradesOwnedSelector],
	(upgrades, owned) => {
		const u = {};
		Object.keys(upgrades).forEach((type) => {
			u[type] = {
				...upgrades[type],
				owned: Boolean(owned[type])
			};
		});

		return u;
	}
);

export const upgradeSelector = createSelector(
	[upgradesSelector, typePropSelector],
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
