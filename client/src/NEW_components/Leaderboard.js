import React from "react";

const Leaderboard = (orderedLeaderBoard) => {
  const leaders = orderedLeaderBoard.data;

  return (
    <>
      <h1>The new Dashboard</h1>
      <p>First step is to fetch the data.</p>
      {leaders.map((item, index) => {
        return (
          <p key={index}>
            {item.position}. {item.user} : {item.points} points
          </p>
        );
      })}
    </>
  );
};

export default Leaderboard;
