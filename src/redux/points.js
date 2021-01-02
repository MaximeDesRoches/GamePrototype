const { createSlice } = require("@reduxjs/toolkit");

const points = createSlice({
	name: "points",
	initialState: {
		value: 0,
		lastConnection: null
	},
	reducers: {
		incrementByAmount(state, action) {
			state.value += action.payload;
			if (state.value < 0) state.value = 0;
		},
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		setLastConnection(state, action) {
			state.lastConnection = action.payload;
		}
	}
});

export const {
	increment,
	decrement,
	incrementByAmount,
	incrementPerSecond,
	decrementPerSecond,
	incrementPerSecondByAmount,
	setLastConnection
} = points.actions;
export default points.reducer;
