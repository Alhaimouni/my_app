import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import dronesReducer from "../features/drones/dronesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    drones: dronesReducer,
  },
});