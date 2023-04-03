import React, { useEffect } from "react";
import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import matches from "../matches.js";

function Match() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  useEffect(() => {
    if (score1 < 0) setScore1(0);
  }, [score1]);

  useEffect(() => {
    if (score2 < 0) setScore2(0);
  }, [score2]);

  const displayMatches = matches.map((item) => {
    const { team1, team2, round, date, place } = item;
    return (
      <div className="welcome-message" key={round}>
        <p className="teams">{team1}</p>

        {/* SCOREBOARD */}

        <span className="score">
          <button
            onClick={() => {
              setScore1(score1 - 1);
            }}
          >
            <FaMinusCircle />
          </button>
          {score1}
          <button
            onClick={() => {
              setScore1(score1 + 1);
            }}
          >
            <FaPlusCircle />
          </button>
          <p>x</p>
          <button
            onClick={() => {
              setScore2(score2 - 1);
            }}
          >
            <FaMinusCircle />
          </button>
          {score2}
          <button
            onClick={() => {
              setScore2(score2 + 1);
            }}
          >
            <FaPlusCircle />
          </button>
        </span>

        {/* END OF SCOREBOARD */}

        <p className="teams">{team2}</p>
        <p>
          {date}, {place}
        </p>
        <div className="separator"></div>
      </div>
    );
  });

  return (
    <div className="login-container">
      <p className="title">Round 1</p>
      <p className="welcome-message">
        What will be the final score? Give us your thought
      </p>
      {displayMatches}
    </div>
  );
}

export default Match;
