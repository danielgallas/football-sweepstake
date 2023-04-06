import player from "../pages/images/player.svg";
import { FaUserAlt, FaLock } from "react-icons/fa";
import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setPassword("");
    setUsername("");
    setConfirmPassword("");
  }, [login]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (login) {
      // LOGIN FUNCTION
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/auth/login",
          { username, password }
        );
        console.log(response);
        navigate("/dashboard");
      } catch (error) {
        setErrorMsg(error.response.data.message);
        setError(true);
        console.log(error.response.data.message);
      }
    } else {
      // REGISTER FUNCTION
      if (password === confirmPassword) {
        try {
          setError(false);
          const response = await axios.post(
            "http://localhost:5000/api/v1/auth/register",
            { username, password }
          );
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        setErrorMsg("Passwords do not match");
        setError(true);
      }
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
          <p className={error ? "error-message" : "null"}>{errorMsg}</p>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-control">
              <input
                value={username}
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setError(false);
                  console.log(e.target.value);
                  setUsername(e.target.value);
                }}
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
                onChange={(e) => {
                  setError(false);
                  setPassword(e.target.value);
                }}
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
            <div className={login ? "null" : "form-control"}>
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => {
                  setError(false);
                  setConfirmPassword(e.target.value);
                }}
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
            <button className="submit">{login ? "Login" : "Register"}</button>
          </form>
          <div className="separator"></div>
          <p className="welcome-message">
            {login ? (
              <button onClick={() => setLogin(false)}>
                Not a member? Register
              </button>
            ) : (
              <button onClick={() => setLogin(true)}>
                Already a member? Log in
              </button>
            )}
          </p>
        </div>
      </section>
    </article>
  );
};

export default Login;
