import player from "../pages/images/player.svg";

function Thanks() {
  const user = localStorage.getItem("user");
  return (
    <article>
      <section className="side">
        <img src={player} alt="" />
      </section>
      <section className="main">
        <p>Thank you, {user}!</p>
      </section>
    </article>
  );
}

export default Thanks;
