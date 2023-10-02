import matches from "../data/matches_total";

const FunStatsCalculateUser = ({ userPredictions, finalResults }) => {
  let gremioWin = 0;
  let gremioTie = 0;
  let gremioLoss = 0;
  let gremioGP = 0;
  let gremioGC = 0;
  let userArray = [];
  let currentUser = "";
  userPredictions.forEach((item) => {
    let userScores = item.scores;
    currentUser = "Gremio " + item.user;
    userScores.forEach((data, index) => {
      if (index < finalResults.length) {
        // insert logic here for calculating football win, tie, loss
        if (matches[index].team1 === "Gremio") {
          if (data.score1 > data.score2) {
            gremioWin = gremioWin + 1;
            gremioGP = gremioGP + data.score1;
            gremioGC = gremioGC + data.score2;
            return;
          } else if ((data.score1 = data.score2)) {
            gremioTie = gremioTie + 1;
            gremioGP = gremioGP + data.score1;
            gremioGC = gremioGC + data.score2;
            return;
          } else {
            gremioLoss = gremioLoss + 1;
            gremioGP = gremioGP + data.score2;
            gremioGC = gremioGC + data.score1;
            return;
          }
        }

        if (matches[index].team2 === "Gremio") {
          if (data.score1 < data.score2) {
            gremioWin = gremioWin + 1;
            gremioGP = gremioGP + data.score2;
            gremioGC = gremioGC + data.score1;

            return;
          } else if ((data.score1 = data.score2)) {
            gremioTie = gremioTie + 1;
            gremioGP = gremioGP + data.score2;
            gremioGC = gremioGC + data.score1;
            return;
          } else {
            gremioLoss = gremioLoss + 1;
            gremioGP = gremioGP + data.score2;
            gremioGC = gremioGC + data.score1;
            return;
          }
        }

        return;
      } else {
        return;
      }
    });
    let gremioPoints = gremioWin * 3 + gremioTie;
    let gremioGames = gremioWin + gremioTie + gremioLoss;
    let gremioPercent = (100 * gremioPoints) / (gremioGames * 3);
    let gremioSaldo = gremioGP - gremioGC;

    userArray.push({
      currentUser,
      gremioWin,
      gremioTie,
      gremioLoss,
      gremioPoints,
      gremioGames,
      gremioPercent,
      gremioGP,
      gremioGC,
      gremioSaldo,
    });
    gremioWin = 0;
    gremioTie = 0;
    gremioLoss = 0;
    gremioPoints = 0;
    gremioGames = 0;
    gremioPercent = 0;
    gremioGP = 0;
    gremioGC = 0;
    gremioSaldo = 0;
    return;
  });
  return userArray;
};

export default FunStatsCalculateUser;
