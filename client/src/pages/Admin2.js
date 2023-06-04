import player from "../pages/images/player.svg";
import instance from "../components/axios";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import MainDash from "../components/maindash/MainDash.js";
import RightSide from "../components/RightSide/RightSide";

// import matches from "../data/matches";
// import DisplayWinners from "../components/DisplayWinners";
// import NextMatch from "../components/NextMatch";

const CheckResults = () => {
  const [allData, setAllData] = useState(null);
  const [resultsData, setResultsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let winners = [];
  let { username } = useParams();

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
      try {
        const response = await instance.get("/api/v1/results");
        if (response.data) {
          setResultsData(response.data.results);
        } else {
          setResultsData(null);
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
  if (!allData && !resultsData) {
    return <p>No data...</p>;
  } else {
    // Function that calculates points from each user
    const calculate = (prediction1, prediction2, final1, final2, round) => {
      if (final1 === final2) {
        if (prediction1 === prediction2) {
          if (prediction1 === final1 && prediction2 === final2) {
            if (round === 7) {
              return 600;
            }
            return 300;
          }
          if (round === 7) {
            return 200;
          }
          return 100;
        }
        return 0;
      }
      if (final1 > final2) {
        if (prediction1 > prediction2) {
          if (prediction1 === final1 && prediction2 === final2) {
            if (round === 7) {
              return 600;
            }
            return 300;
          }
          if (round === 7) {
            return 200;
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

    console.log(player, winners, username, calculate(0, 0, 0, 0, 0, 0));

    return (
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <MainDash />
          <RightSide />
        </div>
      </div>

      // OLD CODE
      // <article>
      //   <section className="side">
      //     <img src={player} alt="" />
      //   </section>
      //   <section className="main">
      //     <div className="welcome-message">
      //       <div className="results-title">Football Sweepstake: {username}</div>
      //       <div className="separator"></div>
      //       <div>
      //         <NextMatch
      //           results={resultsData}
      //           scores={allData}
      //           matches={matches}
      //         />
      //       </div>
      //       <div className="separator"></div>
      //       <div>
      //         {winners ? <DisplayWinners winners={winners} /> : "nothing"}
      //       </div>
      //       <div>
      //         {allData.map((item) => {
      //           winners.push({ user: item.user, points: 0, total: 0 });
      //           return (
      //             <div key={item._id}>
      //               <div className="separator"></div>
      //               <div>
      //                 <b>These are the predictions by {item.user}</b>
      //               </div>
      //               <div>
      //                 {item.scores.map((matchround) => (
      //                   <div key={matchround._id}>
      //                     Round {matches[matchround._id].round}:{" "}
      //                     {matches[matchround._id].team1} {matchround.score1} x{" "}
      //                     {matchround.score2} {matches[matchround._id].team2}{" "}
      //                     <span>
      //                       {resultsData[matchround._id] ? (
      //                         <b>
      //                           {
      //                             (winners[winners.length - 1].points =
      //                               calculate(
      //                                 matchround.score1,
      //                                 matchround.score2,
      //                                 resultsData[matchround._id].finalScore1,
      //                                 resultsData[matchround._id].finalScore2,
      //                                 resultsData[matchround._id].round
      //                               ))
      //                           }{" "}
      //                           POINTS
      //                           <span className="hide">
      //                             {" : "}
      //                             {
      //                               (winners[winners.length - 1].total =
      //                                 winners[winners.length - 1].total +
      //                                 winners[winners.length - 1].points)
      //                             }{" "}
      //                             TOTAL POINTS
      //                           </span>
      //                         </b>
      //                       ) : (
      //                         ""
      //                       )}
      //                     </span>
      //                   </div>
      //                 ))}
      //               </div>
      //               <div>Suarez will score {item.suarez} goals. </div>
      //               <div>Gremio will end the league in: {item.posicao}</div>
      //             </div>
      //           );
      //         })}
      //       </div>
      //     </div>
      //   </section>
      // </article>
    );
  }
};

export default CheckResults;
