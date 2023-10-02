import matches from "../data/matches_total";

const FunStatsCalculate = (finalResults) => {
  let gremioWin = 0;
  let gremioTie = 0;
  let gremioLoss = 0;
  let gremioGP = 0;
  let gremioGC = 0;
  finalResults.forEach((item, index) => {
    if (matches[index].team1 === "Gremio") {
      if (item.finalScore1 > item.finalScore2) {
        gremioWin = gremioWin + 1;
        gremioGP = gremioGP + item.finalScore1;
        gremioGC = gremioGC + item.finalScore2;
      } else if (item.finalScore1 === item.finalScore2) {
        gremioTie = gremioTie + 1;
        gremioGP = gremioGP + item.finalScore1;
        gremioGC = gremioGC + item.finalScore2;
      } else {
        gremioLoss = gremioLoss + 1;
        gremioGP = gremioGP + item.finalScore1;
        gremioGC = gremioGC + item.finalScore2;
      }
    } else if (matches[index].team2 === "Gremio") {
      if (item.finalScore2 > item.finalScore1) {
        gremioWin = gremioWin + 1;
        gremioGP = gremioGP + item.finalScore2;
        gremioGC = gremioGC + item.finalScore1;
      } else if (item.finalScore1 === item.finalScore2) {
        gremioTie = gremioTie + 1;
        gremioGP = gremioGP + item.finalScore2;
        gremioGC = gremioGC + item.finalScore1;
      } else {
        gremioLoss = gremioLoss + 1;
        gremioGP = gremioGP + item.finalScore2;
        gremioGC = gremioGC + item.finalScore1;
      }
    }
  });
  let gremioPoints = gremioWin * 3 + gremioTie;
  let gremioGames = gremioWin + gremioTie + gremioLoss;
  let gremioPercent = (100 * gremioPoints) / (gremioGames * 3);
  let gremioSaldo = gremioGP - gremioGC;
  return {
    currentUser: "Gremio Gremio",
    gremioWin,
    gremioTie,
    gremioLoss,
    gremioPoints,
    gremioGames,
    gremioPercent,
    gremioGP,
    gremioGC,
    gremioSaldo,
  };
};

export default FunStatsCalculate;
