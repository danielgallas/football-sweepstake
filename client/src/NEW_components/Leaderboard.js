import React from "react";
import "./leaderboard.css";

const Leaderboard = (orderedLeaderBoard) => {
  const leaders = orderedLeaderBoard.data;

  return (
    <div className="leaderboard_main">
      <h1>Leaderboard</h1>
      {leaders.map((item, index) => {
        return (
          <p key={index}>
            {item.position}. {item.user} : {item.points} points
          </p>
        );
      })}
    </div>
  );
};

export default Leaderboard;
