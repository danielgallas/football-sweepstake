import React from "react";
import matches from "../data/matches_total";

const LastMatch = (data) => {
  const { userPredictions, finalResults, leaderdata } = data.data;
  const { leaderboard } = leaderdata;
  const lastPlayed = finalResults.length - 1;

  return (
    <div className="main last-match-main">
      <div className="grid-title last-match-grid-title">
        <h3>Last Match</h3>
      </div>
      <div className="grid-child" style={{ backgroundColor: "bisque" }}>
        <h4>Final result:</h4>
      </div>
      <div className="grid-child" style={{ backgroundColor: "bisque" }}>
        <h4>{matches[lastPlayed].team1}</h4>
      </div>
      <div className="grid-child" style={{ backgroundColor: "bisque" }}>
        <h4>{finalResults[lastPlayed].finalScore1}</h4>
      </div>
      <div className="grid-child" style={{ backgroundColor: "bisque" }}>
        <h4>{finalResults[lastPlayed].finalScore2}</h4>
      </div>
      <div className="grid-child" style={{ backgroundColor: "bisque" }}>
        <h4>{matches[lastPlayed].team2}</h4>
      </div>
      <div className="grid-child" style={{ backgroundColor: "bisque" }}></div>
      {userPredictions.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="grid-child">{item.user}</div>
            <div className="grid-child">{matches[lastPlayed].team1}</div>
            <div className="grid-child">
              {item.scores[lastPlayed]
                ? item.scores[lastPlayed].score1
                : "null"}
            </div>
            <div className="grid-child">
              {item.scores[lastPlayed]
                ? item.scores[lastPlayed].score2
                : "null"}
            </div>
            <div className="grid-child">{matches[lastPlayed].team2}</div>
            <div className="grid-child">
              {leaderboard[index].roundpoints[lastPlayed + 1]} points
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default LastMatch;
