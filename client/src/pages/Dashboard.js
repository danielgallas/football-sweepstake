import player from "../pages/images/player.svg";
import "../components/scoreboard.css";
// import Match from "../components/Match";
import instance from "../components/axios";
import { useEffect, useState } from "react";
import DisplayResults from "../components/DisplayResults";
import CheckResults from "./Admin";

const Dashboard = () => {
  const user = localStorage.getItem("user");
  const [prevUser, setPrevUser] = useState(null);

  const getUser = async () => {
    try {
      const userFromDB = await instance.get("/api/v1/scores/" + user);
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
