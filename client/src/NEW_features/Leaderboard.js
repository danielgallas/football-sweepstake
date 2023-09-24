import React from "react";
import "./styles.css";

const Leaderboard = (data) => {
  const { orderedLeaderboard } = data.data;

  return (
    <div className="main leaderboard-main">
      <div className="grid-title leaderboard-grid-title">
        <h3>Leaderboard</h3>
      </div>

      {orderedLeaderboard.map((item, index) => {
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
