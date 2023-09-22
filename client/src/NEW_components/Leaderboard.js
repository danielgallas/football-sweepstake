import React from "react";
import "./leaderboard.css";

const Leaderboard = (orderedLeaderBoard) => {
  const leaders = orderedLeaderBoard.data;

  return (
    <div className="leaderboard_main">
      <div className="grid-title">
        <h3>Leaderboard</h3>
      </div>

      {leaders.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="grid-child"> {item.position} </div>
            <div className="grid-child"> {item.user}</div>
            <div className="grid-child"> {item.points} points</div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Leaderboard;
