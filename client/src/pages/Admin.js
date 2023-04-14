import player from "../pages/images/player.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import matches from "../matches";
import results from "../results";
import DisplayWinners from "../components/DisplayWinners";

const Admin = () => {
  const [allData, setAllData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let winners = [];

  const user = localStorage.getItem("user");
  const url = "http://localhost:5000";
  // const url = "https://football-sweepstake.onrender.com/api/v1/scores/" + user;

  useEffect(() => {
    setIsLoading(true);
    const getAllData = async () => {
      try {
        const response = await axios.get(url + "/api/v1/scores");
        if (response.data) {
          setAllData(response.data.scores);
          // console.log(allData);
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
    return <p>Is loading...</p>;
  }
  if (!allData) {
    return <p>No data...</p>;
  } else {
    // Function that calculates points from each user
    const calculate = (prediction1, prediction2, final1, final2) => {
      if (final1 === final2) {
        if (prediction1 === prediction2) {
          if (prediction1 === final1 && prediction2 === final2) {
            return 300;
          }
          return 100;
        }
        return 0;
      }
      if (final1 > final2) {
        if (prediction1 > prediction2) {
          if (prediction1 === final1 && prediction2 === final2) {
            return 300;
          }
          return 100;
        }
        return 0;
      }
      if (final1 < final2) {
        if (prediction1 < prediction2) {
          if (prediction1 === final1 && prediction2 === final2) {
            return 300;
          }
          return 100;
        }
        return 0;
      }
      return null;
    };
    // END OF Function that calculates points from each user

    return (
      <article>
        <section className="side">
          <img src={player} alt="" />
        </section>
        <section className="main">
          <div className="welcome-message">
            <h1>Hi, {user}!</h1>
            <div>
              {winners ? <DisplayWinners winners={winners} /> : "nothing"}
            </div>
            <div>
              {allData.map((item) => {
                winners.push({ user: item.user, points: 0 });
                return (
                  <div key={item._id}>
                    <div className="separator"></div>
                    <div>
                      <b>These are the predictions by {item.user}</b>
                    </div>
                    <div>
                      {item.scores.map((matchround) => (
                        <div key={matchround._id}>
                          Round {matches[matchround._id].round}:{" "}
                          {matches[matchround._id].team1} {matchround.score1} x{" "}
                          {matchround.score2} {matches[matchround._id].team2}{" "}
                          <span>
                            {results[matchround._id] ? (
                              <b>
                                {
                                  (winners[winners.length - 1].points =
                                    calculate(
                                      matchround.score1,
                                      matchround.score2,
                                      results[matchround._id].finalScore1,
                                      results[matchround._id].finalScore2
                                    ))
                                }{" "}
                                POINTS
                              </b>
                            ) : (
                              ""
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div>Suarez will score {item.suarez} goals. </div>
                    <div>Gremio will end the league in: {item.posicao}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </article>
    );
  }
};

export default Admin;
