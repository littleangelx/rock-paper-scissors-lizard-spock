import { configureStore } from "@reduxjs/toolkit";

import gamePlayReducer from "./gamePlaySlice";

const store = configureStore({
  reducer: {
    gamePlay: gamePlayReducer,
  },
});

export default store;
