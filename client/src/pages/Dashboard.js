import player from "../pages/images/player.svg";
import "../components/scoreboard.css";
import Match from "../components/Match";

function Dashboard() {
  return (
    <article>
      <section className="side">
        <img src={player} alt="" />
      </section>
      <section className="main">
        <Match />
      </section>
    </article>
  );
}

export default Dashboard;
