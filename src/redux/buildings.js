import b from "../objects/buildings";

const { createSlice } = require("@reduxjs/toolkit");

const buildings = createSlice({
	name: "buildings",
	initialState: b,
	reducers: {
		buy(state, action) {
			const { type, qty } = action.payload;
			return {
				...state,
				[type]: {
					...state[type],
					qty: state[type].qty + qty
				}
			};
		}
	}
});

export const { buy } = buildings.actions;
export default buildings.reducer;
