import player from "../pages/images/player.svg";
import instance from "../components/axios";
import { useState, useEffect } from "react";
import matches from "../data/matches";
import results from "../data/results";
import DisplayWinners from "../components/DisplayWinners";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const CheckResults = () => {
  const [allData, setAllData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);
  let winners = [];

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
    return <p>Loading...</p>;
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

    // if (results[results.length - 1].finalScore1 === null) {
    //   console.log("NULL RESULT");
    //   // console.log(results.pop());
    //   // results = results.pop();
    //   // console.log(jack[0]);
    // }

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
              <p>Enter the final result for round 2:</p>
              <p className="teams">{matches[results.length - 1].team1}</p>{" "}
              <span className="score">
                <button
                  className="score-number"
                  onClick={() => {
                    results[results.length - 1].finalScore1 =
                      results[results.length - 1].finalScore1 - 1;
                    if (results[results.length - 1].finalScore1 < 0) {
                      results[results.length - 1].finalScore1 = 0;
                    }
                    setReload(!reload);
                  }}
                >
                  <FaMinusCircle />
                </button>
                {results[results.length - 1].finalScore1}
                <button
                  className="score-number"
                  onClick={() => {
                    results[results.length - 1].finalScore1 =
                      results[results.length - 1].finalScore1 + 1;
                    setReload(!reload);
                  }}
                >
                  <FaPlusCircle />
                </button>
              </span>
              <p>x</p>
              <span className="score">
                <button
                  className="score-number"
                  onClick={() => {
                    results[results.length - 1].finalScore2 =
                      results[results.length - 1].finalScore2 - 1;
                    if (results[results.length - 1].finalScore2 < 0) {
                      results[results.length - 1].finalScore2 = 0;
                    }
                    setReload(!reload);
                  }}
                >
                  <FaMinusCircle />
                </button>
                {results[results.length - 1].finalScore2}
                <button
                  className="score-number"
                  onClick={() => {
                    results[results.length - 1].finalScore2 =
                      results[results.length - 1].finalScore2 + 1;
                    setReload(!reload);
                  }}
                >
                  <FaPlusCircle />
                </button>
              </span>
              <p className="teams">{matches[results.length - 1].team2}</p>
            </div>
            <div className="separator"></div>
            <div>
              {winners ? <DisplayWinners winners={winners} /> : "nothing"}
            </div>
            <div>
              {allData.map((item) => {
                winners.push({ user: item.user, points: 0, total: 0 });
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
                                POINTS{" : "}
                                {
                                  (winners[winners.length - 1].total =
                                    winners[winners.length - 1].total +
                                    winners[winners.length - 1].points)
                                }{" "}
                                TOTAL POINTS
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

export default CheckResults;
