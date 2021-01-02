import b from "../objects/buildings";

const { createSlice } = require("@reduxjs/toolkit");

const buildings = createSlice({
	name: "buildings",
	initialState: {
		quantities: {}
	},
	reducers: {
		buy(state, action) {
			const { type, qty } = action.payload;

			state.quantities = {
				...state.quantities,
				[type]: (state?.quantities[type] || 0) + qty
			};
		}
	}
});

export const { buy } = buildings.actions;
export default buildings.reducer;
