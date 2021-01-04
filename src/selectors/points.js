import { createSelector } from "@reduxjs/toolkit";

import { buildingsSelector } from "./buildings";
import { upgradesSelector } from "./upgrades";

const lastConnectionStateSelector = (state) => state.points.lastConnection;

export const perSecondsSelector = createSelector(
	[buildingsSelector, upgradesSelector],
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

export const lastConnectionPointsSelector = createSelector(
	[perSecondsSelector, lastConnectionStateSelector],
	(pointsPerSecond, lastConnection) => {
		if (lastConnection == null) return 0;

		const delta = (Date.now() - lastConnection) / 1000;

		if (delta >= 30) {
			const pts = pointsPerSecond * delta;
			return pts;
		}

		return 0;
	}
);
