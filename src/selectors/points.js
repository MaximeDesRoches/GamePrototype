import { createSelector } from "@reduxjs/toolkit";

import { buildingsStateSelector } from "./buildings";
import { upgradesStateSelector } from "./upgrades";

export const perSecondsSelector = createSelector(
	[buildingsStateSelector, upgradesStateSelector],
	(buildings, upgrades) => {
		return Object.keys(buildings).reduce((c, type) => {
			const building = buildings[type];
			const modifier =
				Object.values(upgrades)
					.filter((u) => u.owned)
					.filter((u) => u.building === type)
					.reduce((c, u) => {
						return c + u.amount;
					}, 1) || 1;

			return c + building.baseRate * modifier * building.qty;
		}, 0);
	}
);