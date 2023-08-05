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
        <div className="welcome-message">
          <h1>Thank you, {user}!</h1>
          <p>
            The deadline for entering your predictions is closed.
            {/* <Link to="/results">Click here to see your predictions</Link> */}
          </p>
        </div>
      </section>
    </article>
  );
}

export default Thanks;
