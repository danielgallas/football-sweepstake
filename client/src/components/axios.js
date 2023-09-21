import axios from "axios";

// require("dotenv").config();
// dotenv.config();

// const url = process.env.REACT_APP_BACKEND_URL;

// const url =
//   process.env.REACT_APP_BACKEND_URL ||
//   netlify.environment.REACT_APP_BACKEND_URL;

// const instance = axios.create({ baseURL: url });

// const instance = axios.create({ baseURL: "http://localhost:5000" });

const instance = axios.create({
  baseURL: "https://football-sweepstake.vercel.app",
});

// DO NOT THIS ONE. RENDER.COM IS TOO SLOW. GO FOR VERCEL
//  const instance = axios.create({
//   baseURL: "https://football-sweepstake.onrender.com",
// });

export default instance;
