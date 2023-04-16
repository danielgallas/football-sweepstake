import player from "../pages/images/player.svg";
import "../components/scoreboard.css";
// import Match from "../components/Match";
import axios from "axios";
import { useEffect, useState } from "react";
import DisplayResults from "../components/DisplayResults";
import CheckResults from "./Admin";

const Dashboard = () => {
  const user = localStorage.getItem("user");
  const [prevUser, setPrevUser] = useState(null);
  // let url = "http://localhost:5000";
  let url = "https://football-sweepstake.onrender.com";

  const getUser = async () => {
    try {
      const userFromDB = await axios.get(url + "/api/v1/scores/" + user);
      setPrevUser(userFromDB.data.scores.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <article>
      <section className="side">
        <img src={player} alt="" />
      </section>
      <section className="main">
        {user ? (
          prevUser ? (
            <DisplayResults />
          ) : (
            <CheckResults />
          )
        ) : (
          "User not authorised"
        )}
      </section>
    </article>
  );
};

export default Dashboard;
