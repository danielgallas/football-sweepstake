import React, { useEffect, useState } from "react";
import {
  FaPlusCircle,
  FaMinusCircle,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import matches from "../data/matches2.js";
import { useDispatch, useSelector } from "react-redux";
import instance from "./axios.js";
import {
  increase1,
  increase2,
  decrease1,
  decrease2,
  updateUser,
  changeSubmit,
} from "../features/scores/scoresSlice.js";
import { useNavigate, useParams } from "react-router-dom";

function Match(prevData) {
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
    let newData = prevData.prevData;
    userScores.score.scores.map((item) => {
      newData.scores.push(item);
    });

    // console.log(newData);
    // console.log(userScores.score);
    try {
      await instance.put("/api/v1/scores/" + params.username, newData);
    } catch (error) {
      console.log(error);
    }

    // navigate("../thanks");
  };

  const submitDisplay = (
    <>
      <div className="final-message">
        Are you sure you want to submit these predictions?
      </div>
      <button className="submit" onClick={(e) => handleSubmit(e)}>
        Submit!
      </button>
      <button className="review" onClick={() => setMatch(true)}>
        <u>Review my results</u>
      </button>
    </>
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
              {scores[_id - 19].score1}
              <button
                className="score-number"
                onClick={() => {
                  // console.log(_id);
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
              {scores[_id - 19].score2}
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
          {page < 18 ? `Match ${page + 1} & ${page + 2}` : "Round 19"}
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

  const params = useParams();
  localStorage.setItem("user", params.username);
  // console.log(prevData.prevData);
  return (
    <div className="login-container">
      <p className="welcome-message">
        Hi <span className="user">{params.username}</span>.{" "}
        {!submit ? "Enter your predictions" : "Thank you for your input!"}
      </p>
      {match ? matchDisplay : submitDisplay}
    </div>
  );
}

export default Match;
