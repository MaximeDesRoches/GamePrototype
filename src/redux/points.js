const { createSlice } = require("@reduxjs/toolkit");

const points = createSlice({
  name: "points",
  initialState: {
    value: 0,
    perSecond: 0
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
    incrementPerSecondByAmount(state, action) {
      state.value += action.payload;
    },
    incrementPerSecond(state) {
      state.value++;
    },
    decrementPerSecond(state) {
      state.value--;
    }
  }
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementPerSecond,
  decrementPerSecond,
  incrementPerSecondByAmount
} = points.actions;
export default points.reducer;
