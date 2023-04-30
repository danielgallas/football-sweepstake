import axios from "axios";

// const instance = axios.create({ baseURL: "http://localhost:5000" });

// const instance = axios.create({
//   baseURL: "https://football-sweepstake.onrender.com",
// });

const instance = axios.create({
  baseURL: "https://football-sweepstake.vercel.app/api/v1/scores",
});

export default instance;
