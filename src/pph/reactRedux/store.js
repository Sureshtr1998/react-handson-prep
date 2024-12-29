import counterReducer from "./counterReducer";
import { configureStore } from "@reduxjs/toolkit";
import counterReducerSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterSlice: counterReducerSlice,
  },
  // Other configuration options can be added here
});

export default store;
