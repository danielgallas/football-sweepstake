import React, { useEffect, useState } from "react";
import axios from "axios";
import matches from "../matches.js";

function DisplayResults() {
  const user = localStorage.getItem("user");
  const url = "http://localhost:5000";
  // const url = "https://football-sweepstake.onrender.com/api/v1/scores/" + user;

  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState([]);

  const getUser = async () => {
    try {
      const userFromDB = await axios.get(url + "/api/v1/scores/" + user);
      setUserData(userFromDB.data.scores.scores);
      setUserName(userFromDB.data.scores);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const displayScores = userData.map((item) => {
    const { _id, round, score1, score2 } = item;
    return (
      <div key={_id}>
        Round {round}
        {":  "} {matches[_id].team1} {score1} x {score2} {matches[_id].team2}
      </div>
    );
  });

  return (
    <div className="welcome-message">
      <h1>Your guesses, {userName.user}:</h1>
      <div>{displayScores}</div>
      <p>Suarez will score {userName.suarez} goals</p>
      <p>Gremio will finish the championship in: {userName.posicao}</p>
    </div>
  );
}
export default DisplayResults;