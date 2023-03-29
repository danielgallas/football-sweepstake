import player from "../pages/images/player.svg";
import { FaUserAlt, FaLock } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        { username, password }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-control">
              <input
                value={username}
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
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
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
