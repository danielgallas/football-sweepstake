import axios from "axios";

// const url = process.env.REACT_APP_BACKEND_URL;
// const instance = axios.create({ baseURL: url });

const instance = axios.create({ baseURL: "http://localhost:5000" });

// const instance = axios.create({
//   baseURL: "https://football-sweepstake.vercel.app",
// });

export default instance;
