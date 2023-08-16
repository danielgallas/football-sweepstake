import player from "../pages/images/player.svg";
import instance from "../components/axios";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const SetUser = () => {
  const [allData, setAllData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getAllData = async () => {
      try {
        const response = await instance.get("/api/v1/scores");
        if (response.data) {
          setAllData(response.data.scores);
        } else {
          setAllData(null);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getAllData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (!allData) {
    return <p>No data...</p>;
  } else {
    return (
      <article>
        <section className="side">
          <img src={player} alt="" />
        </section>
        <section className="main">
          <div className="welcome-message">
            <div className="results-title">Football Sweepstake</div>
            <div className="separator"></div>
            <div>
              <b>Who are you?</b>
            </div>
            {allData.map((item) => {
              return (
                <p className="btn" key={item._id}>
                  <button className="user-btn">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={`/user/${item.user}`}
                    >
                      {item.user}
                    </Link>
                  </button>
                </p>
              );
            })}
            <div className="separator"></div>
          </div>
        </section>
      </article>
    );
  }
};

export default SetUser;
