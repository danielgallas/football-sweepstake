const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connect");
require("dotenv").config();
const authrouter = require("./routes/auth");
const scores = require("./routes/scores");

// Scraping with puppeteer
// const puppeteer = require("puppeteer");

// async function run() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://ge.globo.com/futebol/brasileirao-serie-a/");

//   // await page.goto("https://ge.globo.com/rj/futebol/campeonato-carioca/");
//   // await page.goto("https://my-log.netlify.app/");

//   // const html = await page.content();
//   // const title = await page.evaluate(() => document.body.innerText);
//   const team1 = await page.evaluate(() =>
//     Array.from(
//       document.querySelectorAll(".placar__equipes.placar__equipes--mandante"),
//       (e) => ({
//         team1: e.querySelector(".equipes__nome").innerText,
//       })
//     )
//   );

//   const score1 = await page.evaluate(() =>
//     Array.from(document.querySelectorAll(".placar-box"), (e) => ({
//       team1: e.querySelector(".placar-box__valor.placar-box__valor--mandante")
//         .innerText,
//     }))
//   );

//   const score2 = await page.evaluate(() =>
//     Array.from(document.querySelectorAll(".placar-box"), (e) => ({
//       team1: e.querySelector(".placar-box__valor.placar-box__valor--visitante")
//         .innerText,
//     }))
//   );

//   const team2 = await page.evaluate(() =>
//     Array.from(
//       document.querySelectorAll(".placar__equipes.placar__equipes--visitante"),
//       (e) => ({
//         team2: e.querySelector(".equipes__nome").innerText,
//       })
//     )
//   );

//   // const links2 = await page.evaluate(
//   //   () => document.querySelector(".equipes__nome").innerText
//   // );

//   console.log(team1);
//   console.log(team2);
//   console.log(score1);
//   console.log(score2);

//   await browser.close();
// }

// run();

// END OF Scraping with puppeteer

// Web scraper code
// const axios = require("axios");
// const cheerio = require("cheerio");
// const urlAxios = "https://ge.globo.com/rj/futebol/campeonato-carioca/";

// const urlAxios2 = "https://my-log.netlify.app/";
// axios(urlAxios2)
//   .then((response) => {
//     const html = response.data;
//     const $ = cheerio.load(html);
//     const text = $("div").html();
//     console.log(text);
//   })
//   .catch((err) => console.error(error));

// const daniel = async () => {
//   await axios(urlAxios)
//     .then((response) => {
//       const html = response.data;
//       const $ = cheerio.load(html);
//       const gremio = $(".jogo__informacoes");
//       console.log(gremio.html());
//       // gremio.each(function () {
//       //   const nome = $(this).find(".jogador-nome").text();
//       //   console.log(nome);
//       // });

//       // const articles = [];
//       // $(".classificacao__header--titulo", html).each(function () {
//       //   const title = $(this).text();
//       //   console.log(title);
//       //   // const url2 = $(this).find("span").attr("title");
//       //   articles.push({ title, url2 });
//       // });
//       // console.log(articles);
//     })
//     .catch((err) => console.log(err));
// };

// // daniel();

// END OF Web scraper code

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
