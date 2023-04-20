import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../components/axios";

export const getLeaders = createAsyncThunk("leaders/getLeaders", async () => {
  try {
    const response = await instance.get("/api/v1/scores");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

let initialState = {
  user: "daniel",
  idade: 43,
};

const leadersSlice = createSlice({
  name: "leaders",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getLeaders.fulfilled, (state, action) => {
      // console.log(state);
      // console.log(action.payload.scores);
      let names = [];
      action.payload.scores.map((item) => {
        // console.log(item.user);
        names.push({ user: item.user });
      });
      // console.log(names);
      return names;
    });
  },
});

export default leadersSlice.reducer;
