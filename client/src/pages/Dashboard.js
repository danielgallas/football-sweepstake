import ScoreBoard from "../components/ScoreBoard";
import player from "../pages/images/player.svg";
import "../components/scoreboard.css";

function Dashboard() {
  return (
    <article>
      <section className="side">
        <img src={player} alt="" />
      </section>
      <section className="main">
        <div className="login-container">
          <p className="title">Round 1</p>
          <p className="welcome-message">
            What will be the final score? Give us your thought
          </p>
          <div className="separator"></div>
          <p className="welcome-message">
            <span className="teams">Gremio</span>
            <p>
              <ScoreBoard />
            </p>
            <span className="teams">Santos</span>
          </p>
          <div className="separator"></div>

          <p className="welcome-message">
            <span className="teams">Santos</span>
            <p>
              <ScoreBoard />
            </p>
            <span className="teams">Gremio</span>
          </p>
        </div>
      </section>
    </article>
  );
}

export default Dashboard;
