import player from "../pages/images/player.svg";
import { Link } from "react-router-dom";

function Thanks() {
  const user = localStorage.getItem("user");
  return (
    <article>
      <section className="side">
        <img src={player} alt="" />
      </section>
      <section className="main">
        <p>Thank you, {user}!</p>
        <p>
          <Link to="/dashboard">Click here to see your results</Link>
        </p>
      </section>
    </article>
  );
}

export default Thanks;
