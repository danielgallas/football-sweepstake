import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import matches from "../matches.js";
import { useDispatch, useSelector } from "react-redux";
import {
  increase1,
  increase2,
  decrease1,
  decrease2,
} from "../features/scores/scoresSlice.js";

function Match() {
  // const { score1, score2 } = useSelector((store) => store.score);
  const { scores } = useSelector((store) => store.score);
  const dispatch = useDispatch();

  const displayMatches = matches.map((item) => {
    const { team1, team2, _id, date, place, round } = item;

    return (
      <div className="welcome-message" key={round}>
        <p className="teams">{team1}</p>

        {/* SCOREBOARD */}

        <span className="score">
          <button
            onClick={() => {
              dispatch(decrease1({ _id }));
            }}
          >
            <FaMinusCircle />
          </button>
          {scores[_id].score1}
          <button
            onClick={() => {
              dispatch(increase1({ _id }));
            }}
          >
            <FaPlusCircle />
          </button>
          <p>x</p>
          <button
            onClick={() => {
              dispatch(decrease2({ _id }));
            }}
          >
            <FaMinusCircle />
          </button>
          {scores[_id].score2}
          <button
            onClick={() => {
              dispatch(increase2({ _id }));
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
