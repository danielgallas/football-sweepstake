import player from "../pages/images/player.svg";
import "../components/scoreboard.css";
import Match from "../components/Match";
// import { useSelector } from "react-redux";

function Dashboard() {
  const user = localStorage.getItem("user");
  return (
    <article>
      <section className="side">
        <img src={player} alt="" />
      </section>
      <section className="main">
        {user ? <Match /> : "User not authorised"}
      </section>
    </article>
  );
}

export default Dashboard;
