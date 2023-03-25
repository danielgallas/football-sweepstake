const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
// const authrouter = require("./routes/auth");

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
// app.use("/api/v1/auth", authrouter);

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

// code from Auth0

const { auth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "ajshdlaskjdhasjldkh",
  baseURL: "http://localhost:5000",
  clientID: "MNlGnGieoEBVazNJ08nXMSmWuIo3ieFI",
  issuerBaseURL: "https://dev-ffvu53mxtpqd8laz.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

const { requiresAuth } = require("express-openid-connect");

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user.given_name));
  // res.send(req.oidc.user);
});
