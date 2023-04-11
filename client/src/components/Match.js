import React, { useEffect, useState } from "react";
import {
  FaPlusCircle,
  FaMinusCircle,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import matches from "../matches.js";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
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
} from "../features/scores/scoresSlice.js";

function Match() {
  const [page, setPage] = useState(0);
  const [match, setMatch] = useState(false);
  // const [submit, setSubmit] = useState(false);
  const [matchesSlice, setMatchesSlice] = useState(
    matches.slice(page, page + 2)
  );
  const [prevPage, setPrevPage] = useState(true);
  const [nextPage, setNextPage] = useState(false);
  const { scores } = useSelector((store) => store.score);
  const userScores = useSelector((store) => store);
  const dispatch = useDispatch();

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(
  //       "http://localhost:5000/api/v1/scores/",
  //       userScores.score
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

  const extraDisplay = (
    <div className="login-container">
      <p>Gremio will come in what place?</p>

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
        <button className="btn-page" onClick={() => console.log(page)}>
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
        Hi <span className="user">{userScores.score.user}</span>. Guess away!
      </p>
      {match ? matchDisplay : extraDisplay}
    </div>
  );
}

export default Match;
