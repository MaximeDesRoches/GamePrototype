import { createSelector } from "@reduxjs/toolkit";
import { MULTIPLIER } from "../Constants";

export const buildingsStateSelector = (state) => state.buildings;
const typePropSelector = (state, props) => props.type;

function calculate(building) {
  return {
    ...building,
    cost: parseFloat(
      (building.baseCost * Math.pow(MULTIPLIER, building.qty)).toFixed(2)
    )
  };
}

export const buildingSelector = createSelector(
  [buildingsStateSelector, typePropSelector],
  (buildings, type) => {
    return buildings[type] ? calculate(buildings[type]) : null;
  }
);
