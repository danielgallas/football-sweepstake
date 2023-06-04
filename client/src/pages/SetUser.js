import player from "../pages/images/player.svg";
import instance from "../components/axios";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

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
    // Function that calculates points from each user

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
            {console.log(allData)}
            {allData.map((item) => {
              return (
                <p className="btn">
                  <button className="user-btn" key={item._id}>
                    {item.user}
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
