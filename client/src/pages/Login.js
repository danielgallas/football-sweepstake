import player from "../pages/images/player.svg";
import { FaUserAlt, FaLock } from "react-icons/fa";
import "./styles.css";

const Login = () => {
  return (
    <article>
      <section className="side">
        <img src={player} alt="" />
      </section>

      <section className="main">
        <div className="login-container">
          <p className="title">Gremio Sweepstake</p>
          <div className="separator"></div>
          <p className="welcome-message">
            Please, provide login credential to proceed and have access to all
            our services
          </p>
          <form className="login-form">
            <div className="form-control">
              <input type="text" placeholder="Username" />
              <FaUserAlt
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "32px",
                  transform: "translateY(-50%)",
                  color: "#888",
                }}
              />
            </div>
            <div className="form-control">
              <input type="password" placeholder="Password" />
              <FaLock
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "32px",
                  transform: "translateY(-50%)",
                  color: "#888",
                }}
              />
            </div>
            <button className="submit">Login</button>
          </form>
        </div>
      </section>
    </article>
  );
};

export default Login;
