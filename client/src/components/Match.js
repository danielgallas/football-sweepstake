import React, { useEffect } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import matches from "../matches.js";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  increase1,
  increase2,
  decrease1,
  decrease2,
  updateUser,
} from "../features/scores/scoresSlice.js";

function Match() {
  const { scores } = useSelector((store) => store.score);
  const userScores = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("handleSubmit passed");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/scores/",
        userScores.score
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(updateUser());
  }, [dispatch]);

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
      <p className="title"> Hi {userScores.score.user}</p>
      <p className="welcome-message">
        What will be the final score? Give us your thought
      </p>
      {displayMatches}
      <button onClick={(e) => handleClick(e)}>SUBMIT</button>
    </div>
  );
}

export default Match;
