import React from "react";

const NextMatch = (results) => {
  const lastRound = results.results.slice(-1)[0].round;
  const nextRound = lastRound + 1;
  return (
    <>
      <div>
        <b>Predictions for the next match</b>
      </div>
      <div>{console.log(lastRound)}</div>
      <div>
        {results.scores.map((item) => {
          return (
            <p key={item._id}>
              {item.user}: {results.matches[nextRound - 1].team1}{" "}
              {item.scores[nextRound - 1].score1} x{" "}
              {item.scores[nextRound - 1].score2}{" "}
              {results.matches[nextRound - 1].team2}
            </p>
          );
        })}
      </div>
      <div>{console.log(results)}</div>
      {/* <div>{console.log(results.results[0].round)}</div> */}
    </>
  );
};

export default NextMatch;
