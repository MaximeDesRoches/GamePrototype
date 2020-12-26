import u from "../objects/upgrades";

const { createSlice } = require("@reduxjs/toolkit");

const upgrades = createSlice({
	name: "upgrades",
	initialState: u,
	reducers: {
		buy(state, action) {
			const { type } = action.payload;
			console.log("Buy !", type);
			return {
				...state,
				[type]: {
					...state[type],
					owned: true
				}
			};
		}
	}
});

export const { buy } = upgrades.actions;
export default upgrades.reducer;
