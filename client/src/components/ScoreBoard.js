import React, { useEffect } from "react";
import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

function ScoreBoard() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  useEffect(() => {
    if (score1 < 0) setScore1(0);
  }, [score1]);

  useEffect(() => {
    if (score2 < 0) setScore2(0);
  }, [score2]);

  return (
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
  );
}

export default ScoreBoard;
