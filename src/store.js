import { configureStore } from "@reduxjs/toolkit";
import { throttle } from "lodash";
//import { createLogger } from "redux-logger";
import rootReducer from "./reducers/reducer";

const loadState = () => {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			return undefined;
		}

		console.log("initial state", JSON.parse(serializedState));

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
	preloadedState: loadState(),
	reducer: rootReducer
	//middleware: [logger, ...getDefaultMiddleware()]
});

store.subscribe(
	throttle(() => {
		saveState(store.getState());
	})
);

export default store;
