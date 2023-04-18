import { createSlice } from "@reduxjs/toolkit";
import instance from "../../components/axios";

let leaders = [];

const getUsers = async () => {
  try {
    const response = await instance.get("/api/v1/scores");
    response.data.scores.map((item) =>
      leaders.push({ user: item.user, points: 0 })
    );
    console.log(leaders);
  } catch (error) {
    console.log(error);
  }
};

getUsers();

const initialState = {};

const leadersSlice = createSlice({
  name: "leaders",
  initialState,
});

export default leadersSlice.reducer;
