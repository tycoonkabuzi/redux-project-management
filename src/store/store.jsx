import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./manageProjectSlice";
const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});
export default store;
