import React from "react";
import FunStatsCalculate from "../NEW_utils/FunStatsCalculate";
import FunStatsCalculateUser from "../NEW_utils/FunStatsCalculateUser";

const FunStats = ({ data }) => {
  const { userPredictions, finalResults } = data;
  const gremioPerformance = FunStatsCalculate(finalResults);
  const userPerformance = FunStatsCalculateUser({
    userPredictions,
    finalResults,
  });
  userPerformance.push(gremioPerformance);

  userPerformance.sort((a, b) => {
    if (a.gremioPoints > b.gremioPoints) {
      return -1;
    } else if (a.gremioPoints < b.gremioPoints) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <>
      <div className="main">
        <div className="grid-title">
          <h3>FunStats</h3>
        </div>
        <div className="league-performance">
          <div className="grid-title league-performance-title">
            <h4>League performance so far</h4>
          </div>
          <div className="grid-child"></div>
          <div className="grid-child">Pts</div>
          <div className="grid-child">%</div>
          <div className="grid-child">J</div>
          <div className="grid-child">V</div>
          <div className="grid-child">E</div>
          <div className="grid-child">D</div>
          <div className="grid-child">GP</div>
          <div className="grid-child">GC</div>
          <div className="grid-child">Sal</div>
          {userPerformance.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="grid-child"
                  style={
                    item.currentUser === "Gremio Gremio"
                      ? { color: "blue" }
                      : { color: "brisque" }
                  }
                >
                  {item.currentUser}
                </div>
                <div
                  className="grid-child"
                  style={
                    item.currentUser === "Gremio Gremio"
                      ? { color: "blue" }
                      : { color: "brisque" }
                  }
                >
                  {item.gremioPoints}
                </div>
                <div
                  className="grid-child"
                  style={
                    item.currentUser === "Gremio Gremio"
                      ? { color: "blue" }
                      : { color: "brisque" }
                  }
                >
                  {item.gremioPercent.toFixed(1)}
                </div>
                <div
                  className="grid-child"
                  style={
                    item.currentUser === "Gremio Gremio"
                      ? { color: "blue" }
                      : { color: "brisque" }
                  }
                >
                  {item.gremioGames}
                </div>
                <div
                  className="grid-child"
                  style={
                    item.currentUser === "Gremio Gremio"
                      ? { color: "blue" }
                      : { color: "brisque" }
                  }
                >
                  {item.gremioWin}
                </div>
                <div
                  className="grid-child"
                  style={
                    item.currentUser === "Gremio Gremio"
                      ? { color: "blue" }
                      : { color: "brisque" }
                  }
                >
                  {item.gremioTie}
                </div>
                <div
                  className="grid-child"
                  style={
                    item.currentUser === "Gremio Gremio"
                      ? { color: "blue" }
                      : { color: "brisque" }
                  }
                >
                  {item.gremioLoss}
                </div>
                <div
                  className="grid-child"
                  style={
                    item.currentUser === "Gremio Gremio"
                      ? { color: "blue" }
                      : { color: "brisque" }
                  }
                >
                  {item.gremioGP}
                </div>
                <div
                  className="grid-child"
                  style={
                    item.currentUser === "Gremio Gremio"
                      ? { color: "blue" }
                      : { color: "brisque" }
                  }
                >
                  {item.gremioGC}
                </div>
                <div
                  className="grid-child"
                  style={
                    item.currentUser === "Gremio Gremio"
                      ? { color: "blue" }
                      : { color: "brisque" }
                  }
                >
                  {item.gremioSaldo}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FunStats;
