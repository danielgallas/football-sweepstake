import React, { useEffect, useState } from "react";
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
  const [page, setPage] = useState(0);
  const [matchesSlice, setMatchesSlice] = useState(
    matches.slice(page, page + 2)
  );
  const { scores } = useSelector((store) => store.score);
  const userScores = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/scores/",
        userScores.score
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevPage = () => {
    page < 2 ? setPage(0) : setPage(page - 2);
  };

  const handleNextPage = () => {
    if (page + 2 === matches.length) {
      setPage(matches.length - 2);
    } else if (page + 2 > matches.length) {
      setPage(matches.length - 1);
    } else {
      setPage(page + 2);
    }
  };

  useEffect(() => {
    dispatch(updateUser());
  }, [dispatch]);

  useEffect(() => {
    setMatchesSlice(matches.slice(page, page + 2));
  }, [page]);

  return (
    <div className="login-container">
      <p className="title"> Hi {userScores.score.user}</p>
      <p className="welcome-message">
        What will be the final score? Give us your thought
      </p>
      {matchesSlice.map((item) => {
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
              ROUND {round}, {date}, {place}
            </p>

            <div className="separator"></div>
          </div>
        );
      })}
      <button onClick={() => handlePrevPage()}>PREVIOUS PAGE</button>
      <button onClick={() => handleNextPage()}>NEXT PAGE</button>
      <button onClick={(e) => handleClick(e)}>SUBMIT</button>
    </div>
  );
}

export default Match;
