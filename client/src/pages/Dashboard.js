import player from "../pages/images/player.svg";
import "../components/scoreboard.css";
import Match from "../components/Match";
import axios from "axios";
import { useEffect, useState } from "react";
import DisplayResults from "../components/DisplayResults";

const Dashboard = () => {
  const user = localStorage.getItem("user");
  const [prevUser, setPrevUser] = useState(null);

  const getUser = async () => {
    try {
      const url =
        "https://football-sweepstake.onrender.com/api/v1/scores/" + user;
      const userFromDB = await axios.get(url);
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
            <Match />
          )
        ) : (
          "User not authorised"
        )}
      </section>
    </article>
  );
};

export default Dashboard;
