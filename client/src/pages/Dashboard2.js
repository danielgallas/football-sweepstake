import player from "../pages/images/player.svg";
import "../components/scoreboard.css";
import instance from "../components/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Match from "../components/Match2";

const Dashboard = () => {
  // const user = localStorage.getItem("user");
  const username = useParams();
  const user = username.username;
  const [prevUser, setPrevUser] = useState(null);
  const [prevData, setPrevData] = useState(null);

  const getUser = async () => {
    try {
      const userFromDB = await instance.get("/api/v1/scores/" + user);
      setPrevUser(userFromDB.data.scores.user);
      setPrevData(userFromDB.data.scores);
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
        {/* {user
          ? prevUser
            ? console.log(prevData)
            : console.log("not")
          : console.log("not")} */}
        {user ? (
          prevData ? (
            <Match prevData={prevData} />
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
