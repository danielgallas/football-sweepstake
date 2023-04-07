import { createSlice } from "@reduxjs/toolkit";
import scores from "../../scores";

const initialState = {
  scores: scores,
  user: null,
  test: 78,
  isLoading: true,
};

const scoresSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {
    increase1: (state, { payload }) => {
      state.scores[payload._id].score1 = state.scores[payload._id].score1 + 1;
    },
    increase2: (state, { payload }) => {
      state.scores[payload._id].score2 = state.scores[payload._id].score2 + 1;
    },
    decrease1: (state, { payload }) => {
      if (state.scores[payload._id].score1 === 0) {
        return;
      }
      state.scores[payload._id].score1 = state.scores[payload._id].score1 - 1;
    },
    decrease2: (state, { payload }) => {
      if (state.scores[payload._id].score2 === 0) {
        return;
      }
      state.scores[payload._id].score2 = state.scores[payload._id].score2 - 1;
    },
    updateUser: (state) => {
      state.test = 82;
      state.user = localStorage.getItem("user");
    },
  },
});

// console.log(scoresSlice);

export const { increase1, increase2, decrease1, decrease2, updateUser } =
  scoresSlice.actions;

export default scoresSlice.reducer;
