import React, { useEffect, useState } from "react";
import axios from "axios";
import matches from "../matches.js";

function DisplayResults() {
  const user = localStorage.getItem("user");
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState([]);

  const getUser = async () => {
    try {
      const url = "http://localhost:5000/api/v1/scores/" + user;
      const userFromDB = await axios.get(url);
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
      <>
        <div>
          Round {round}
          {":  "} {matches[_id].team1} {score1} x {score2} {matches[_id].team2}
        </div>
      </>
    );
  });

  console.log(userData);
  console.log(userName);

  return (
    <div className="welcome-message">
      <h1>Your guesses, {userName.user}:</h1>
      <p>{displayScores}</p>
      <p>Suarez will score {userName.suarez} goals</p>
      <p>Gremio will finish the championship in: {userName.posicao}</p>
    </div>
  );
}
export default DisplayResults;
