const { createSlice } = require("@reduxjs/toolkit");

const upgrades = createSlice({
	name: "upgrades",
	initialState: {
		owned: {}
	},
	reducers: {
		buy(state, action) {
			const { type } = action.payload;

			state.quantities = {
				...state.quantities,
				[type]: true
			};
		}
	}
});

export const { buy } = upgrades.actions;
export default upgrades.reducer;
