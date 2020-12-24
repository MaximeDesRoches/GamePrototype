import { createSelector } from "@reduxjs/toolkit";

import { buildingsStateSelector } from "./buildings";

export const perSecondsSelector = createSelector(
  [buildingsStateSelector],
  (buildings) => {
    return Object.values(buildings).reduce((c, v) => {
      return c + v.baseRate * v.qty;
    }, 0);
  }
);
