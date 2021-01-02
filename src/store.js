import { configureStore } from "@reduxjs/toolkit";
import { throttle } from "lodash";
import rootReducer from "./reducers/reducer";

const loadState = () => {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("state", serializedState);
	} catch {
		// ignore write errors
	}
};

const store = configureStore({
	reducer: rootReducer,
	preloadedState: loadState()
	//middleware: [logger, ...getDefaultMiddleware()]
});

store.subscribe(
	throttle(() => {
		saveState(store.getState());
	})
);

export default store;
