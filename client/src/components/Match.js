import React, { useEffect, useState } from "react";
import {
  FaPlusCircle,
  FaMinusCircle,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import matches from "../matches.js";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  increase1,
  increase2,
  decrease1,
  decrease2,
  increasePosicao,
  decreasePosicao,
  increaseSuarez,
  decreaseSuarez,
  updateUser,
  changeSubmit,
} from "../features/scores/scoresSlice.js";
import { useNavigate } from "react-router-dom";

function Match() {
  const url = "http://localhost:5000";
  // const url = "https://football-sweepstake.onrender.com/api/v1/auth/login";

  const [page, setPage] = useState(0);
  const [match, setMatch] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [matchesSlice, setMatchesSlice] = useState(
    matches.slice(page, page + 2)
  );
  const [prevPage, setPrevPage] = useState(true);
  const [nextPage, setNextPage] = useState(false);
  const { scores } = useSelector((store) => store.score);
  const userScores = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePrevPage = () => {
    if (page < 3) {
      setPage(0);
      setPrevPage(true);
    } else {
      setPage(page - 2);
      setPrevPage(false);
      setNextPage(false);
    }
  };

  const handleNextPage = () => {
    if (page === 20) {
      setPage(matches.length - 2);
      setPrevPage(false);
    } else if (page + 2 > matches.length) {
      setPage(matches.length - 1);
      setPrevPage(false);
      setMatch(false);
    } else {
      setPage(page + 2);
      setPrevPage(false);
    }
  };

  useEffect(() => {
    dispatch(updateUser());
  }, [dispatch]);

  useEffect(() => {
    setMatchesSlice(matches.slice(page, page + 2));
  }, [page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(changeSubmit());

    try {
      await axios.post(url + "/api/v1/scores/", userScores.score);
    } catch (error) {
      console.log(error);
    }

    navigate("../thanks");
  };

  const submitDisplay = (
    <>
      <div className="final-message">
        Are you sure you want to submit these predictions?
      </div>
      <button className="submit" onClick={(e) => handleSubmit(e)}>
        Submit!
      </button>
      <button className="review" onClick={() => setSubmit(false)}>
        <u>Review my results</u>
      </button>
    </>
  );

  const extraDisplay = (
    <div className="login-container">
      <p>In what rank will Gremio end the league?</p>

      {/* POSICAO BOARD */}

      <span className="score">
        <button
          className="score-number"
          onClick={() => {
            dispatch(decreasePosicao());
          }}
        >
          <FaMinusCircle />
        </button>
        {userScores.score.posicao}
        <button
          className="score-number"
          onClick={() => {
            dispatch(increasePosicao());
          }}
        >
          <FaPlusCircle />
        </button>
      </span>

      {/* END OF POSICAO BOARD */}

      <div className="separator"></div>
      <p className="">How many goals will Suarez score?</p>

      {/* SUAREZ BOARD */}

      <span className="score">
        <button
          className="score-number"
          onClick={() => {
            dispatch(decreaseSuarez());
          }}
        >
          <FaMinusCircle />
        </button>
        {userScores.score.suarez}
        <button
          className="score-number"
          onClick={() => {
            dispatch(increaseSuarez());
          }}
        >
          <FaPlusCircle />
        </button>
      </span>

      {/* END OF SUAREZ BOARD */}

      <div className="separator"></div>

      <div className="pages">
        <button className="btn-page" onClick={() => setMatch(true)}>
          <FaArrowCircleLeft />
        </button>
        <p>POSITION & SUAREZ</p>
        <button className="btn-page" onClick={() => setSubmit(true)}>
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );

  const matchDisplay = (
    <>
      {matchesSlice.map((item) => {
        const { team1, team2, _id, date, place, round } = item;

        return (
          <div className="welcome-message" key={round}>
            <p className="teams">{team1}</p>

            {/* SCOREBOARD */}

            <span className="score">
              <button
                className="score-number"
                onClick={() => {
                  dispatch(decrease1({ _id }));
                }}
              >
                <FaMinusCircle />
              </button>
              {scores[_id].score1}
              <button
                className="score-number"
                onClick={() => {
                  dispatch(increase1({ _id }));
                }}
              >
                <FaPlusCircle />
              </button>
            </span>
            <p>x</p>
            <span className="score">
              <button
                className="score-number"
                onClick={() => {
                  dispatch(decrease2({ _id }));
                }}
              >
                <FaMinusCircle />
              </button>
              {scores[_id].score2}
              <button
                className="score-number"
                onClick={() => {
                  dispatch(increase2({ _id }));
                }}
              >
                <FaPlusCircle />
              </button>
            </span>

            {/* END OF SCOREBOARD */}

            <p className="teams">{team2}</p>
            <p className="small-print">
              <b>ROUND {round}</b>, {date}, {place}
            </p>
            <div className="separator"></div>
          </div>
        );
      })}
      <div className="pages">
        <button
          className="btn-page"
          disabled={prevPage}
          onClick={() => handlePrevPage()}
        >
          <FaArrowCircleLeft />
        </button>
        <button onClick={() => console.log(page)}>
          {page < 18 ? `Rounds ${page + 1} & ${page + 2}` : "Round 19"}
        </button>
        <button
          className="btn-page"
          disabled={nextPage}
          onClick={() => handleNextPage()}
        >
          <FaArrowCircleRight />
        </button>
      </div>
      {/* <button onClick={(e) => handleClick(e)}>SUBMIT</button> */}
    </>
  );

  return (
    <div className="login-container">
      <p className="welcome-message">
        Hi <span className="user">{userScores.score.user}</span>.{" "}
        {!submit ? "Enter your predictions" : "Thank you for your input!"}
      </p>
      {match ? matchDisplay : !submit ? extraDisplay : submitDisplay}
    </div>
  );
}

export default Match;
