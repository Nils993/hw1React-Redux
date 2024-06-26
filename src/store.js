import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../src/components/reducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
