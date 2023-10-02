import React, { Fragment, useState } from "react";
import matches from "../data/matches_total";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AllMatchesRound = (data) => {
  const { userPredictions, finalResults } = data.data;
  const [round, setRound] = useState(finalResults.length);

  const handleRound = (order) => {
    if (order === "add") {
      setRound(round + 1);
    }
    if (order === "subtract") {
      setRound(round - 1);
    }
  };

  return (
    <>
      <div className="main last-match-main">
        <div className="grid-title last-match-grid-title">
          <h3>All Matches by Round</h3>
        </div>
        <div className="grid-title last-match-grid-title">
          <h4>
            Round {round + 1}
            {data.data.leaderdata.leaderboard[0].roundpoints[round + 1]
              ? ": " +
                matches[round].team1 +
                " " +
                finalResults[round].finalScore1 +
                " x " +
                finalResults[round].finalScore2 +
                " " +
                matches[round].team2
              : ""}
          </h4>
        </div>
        {userPredictions.map((item, index) => {
          const { user, scores } = item;
          if (!scores[round]) {
            return <Fragment key={index}></Fragment>;
          } else
            return (
              <Fragment key={index}>
                <div className="grid-child">{user}</div>
                <div className="grid-child">{matches[round].team1}</div>
                <div className="grid-child">{scores[round].score1}</div>
                <div className="grid-child">{scores[round].score2}</div>
                <div className="grid-child">{matches[round].team2}</div>
                <div className="grid-child">
                  {data.data.leaderdata.leaderboard[index].roundpoints[
                    round + 1
                  ]
                    ? data.data.leaderdata.leaderboard[index].roundpoints[
                        round + 1
                      ] + " pts"
                    : ""}
                </div>
              </Fragment>
            );
        })}
      </div>
      {/* Bottom buttons */}
      <div className="bottom-buttons">
        <button
          className={round < 1 ? "disabled" : "button"}
          disabled={round < 1}
          onClick={() => handleRound("subtract")}
        >
          <FaArrowLeft />
        </button>
        <button
          className={round > 36 ? "disabled" : "button"}
          disabled={round > 36}
          onClick={() => handleRound("add")}
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default AllMatchesRound;
