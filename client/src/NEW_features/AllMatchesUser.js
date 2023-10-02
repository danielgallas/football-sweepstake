import React, { Fragment, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import matches from "../data/matches_total";

const AllMatchesUser = (data) => {
  const [user, setUser] = useState(0);

  const handleUser = (order) => {
    if (order === "add") {
      setUser(user + 1);
    }
    if (order === "subtract") {
      setUser(user - 1);
    }
  };

  const { userPredictions, leaderdata } = data.data;
  const { leaderboard } = leaderdata;

  return (
    <>
      <div className="main last-match-main" style={{ marginBottom: "200px" }}>
        <div className="grid-title last-match-grid-title">
          <h3>All Matches - by User</h3>
        </div>
        <div className="grid-title last-match-grid-title">
          <h4>{userPredictions[user].user}</h4>
        </div>
        {userPredictions[user].scores.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className="grid-child">Round {item.round}</div>
              <div className="grid-child">{matches[index].team1}</div>
              <div className="grid-child">{item.score1}</div>
              <div className="grid-child">{item.score2}</div>
              <div className="grid-child">{matches[index].team2}</div>
              <div className="grid-child">
                {leaderboard[user].roundpoints[index + 1]
                  ? leaderboard[user].roundpoints[index + 1] + " pts"
                  : ""}
              </div>
            </Fragment>
          );
        })}
      </div>
      {/* Bottom buttons */}
      <div className="bottom-buttons">
        <button
          className={user < 1 ? "disabled" : "button"}
          disabled={user < 1}
          onClick={() => handleUser("subtract")}
        >
          <FaArrowLeft />
        </button>
        <button
          className={user > 5 ? "disabled" : "button"}
          disabled={user > 5}
          onClick={() => handleUser("add")}
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default AllMatchesUser;
