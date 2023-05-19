const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connect");
require("dotenv").config();
const authrouter = require("./routes/auth");
const scores = require("./routes/scores");
const postResults = require("./routes/postResults");

const port = process.env.PORT || 5000;

const url = "http://localhost:3000";
// const url = "https://football-sweepstake.netlify.app";

// middleware
app.use(express.json());
app.use(cors({ origin: url }));

// Solution to CORS problem
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   //   res.setHeader(
//   //     "Access-Control-Allow-Headers",
//   //     "Origin, X-Requested-With, Content-Type, Accept"
//   //   );
//   //   res.setHeader(
//   //     "Access-Control-Allow-Methods",
//   //     "POST, GET, PATCH, DELETE, OPTIONS"
//   //   );
//   next();
// });

// routes
app.use("/api/v1/auth", authrouter);
app.use("/api/v1/scores", scores);
app.use("/api/v1/results", postResults);

// starting the server and the database

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to the database...");
    app.listen(port, () => {
      console.log(`Server running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
