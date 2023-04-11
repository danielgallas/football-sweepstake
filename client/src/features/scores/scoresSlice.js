import { createSlice } from "@reduxjs/toolkit";
import scores from "../../scores";

const initialState = {
  scores: scores,
  user: null,
  suarez: 15,
  posicao: 1,
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
    increasePosicao: (state) => {
      state.posicao = state.posicao + 1;
      if (state.posicao > 20) {
        state.posicao = 20;
      }
      return;
    },
    decreasePosicao: (state) => {
      state.posicao = state.posicao - 1;
      if (state.posicao < 1) {
        state.posicao = 1;
      }
      return;
    },
    increaseSuarez: (state) => {
      state.suarez = state.suarez + 1;
      return;
    },
    decreaseSuarez: (state) => {
      state.suarez = state.suarez - 1;
      if (state.suarez < 0) {
        state.suarez = 0;
      }
      return;
    },
    updateUser: (state) => {
      state.user = localStorage.getItem("user");
    },
  },
});

// console.log(scoresSlice);

export const {
  increase1,
  increase2,
  decrease1,
  decrease2,
  increasePosicao,
  decreasePosicao,
  increaseSuarez,
  decreaseSuarez,
  updateUser,
} = scoresSlice.actions;

export default scoresSlice.reducer;
