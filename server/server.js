const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connect");
require("dotenv").config();
const authrouter = require("./routes/auth");

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

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
