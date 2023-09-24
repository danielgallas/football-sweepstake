import React from "react";
import matches from "../data/matches_total";

const NextMatch = (data) => {
  const lastPlayed = data.data.finalResults.length;
  const { userPredictions } = data.data;
  return (
    <div className="main next-match-main">
      <div className="grid-title next-match-grid-title">
        <h3>
          Round {lastPlayed + 1}: {matches[lastPlayed].team1} x{" "}
          {matches[lastPlayed].team2}
        </h3>
      </div>
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
              {" "}
              {item.scores[lastPlayed]
                ? item.scores[lastPlayed].score2
                : "null"}
            </div>
            <div className="grid-child">{matches[lastPlayed].team2}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default NextMatch;
