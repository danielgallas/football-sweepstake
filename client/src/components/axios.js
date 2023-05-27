import axios from "axios";

// const instance = axios.create({ baseURL: "http://localhost:5000" });

const instance = axios.create({
  baseURL: "https://football-sweepstake.vercel.app",
});

// DO NOT THIS ONE. RENDER.COM IS TOO SLOW. GO FOR VERCEL
//  const instance = axios.create({
//   baseURL: "https://football-sweepstake.onrender.com",
// });

export default instance;
