import { configureStore } from "@reduxjs/toolkit";
import scoresReducer from "./features/scores/scoresSlice";
import leadersSlice from "./features/leaders/leadersSlice";

export const store = configureStore({
  reducer: {
    score: scoresReducer,
    leaders: leadersSlice,
  },
});
