import player from "../pages/images/player.svg";
import "../components/scoreboard.css";
import Match from "../components/Match";
// import { useSelector } from "react-redux";

function Dashboard() {
  // const { test } = useSelector((store) => store.score);

  return (
    <article>
      <section className="side">
        <img src={player} alt="" />
      </section>
      <section className="main">
        {/* <p>NOW THIS NUMBER SHOULD BE TWENTY-THREE: {test}</p> */}
        <Match />
      </section>
    </article>
  );
}

export default Dashboard;
