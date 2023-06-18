// import player from "../pages/images/player.svg";
import instance from "../components/axios";
import { useState, useEffect, createContext } from "react";
import Loading from "../components/Loading";
// import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import MainDash from "../components/maindash/MainDash.js";
import RightSide from "../components/RightSide/RightSide";

export const LeaderContext = createContext();

// import matches from "../data/matches";
// import DisplayWinners from "../components/DisplayWinners";
// import NextMatch from "../components/NextMatch";

// STUFF TO DO
// DATA TO BE IMPORTED:
// into the winners array push 3 things: a new array pointsRound1...pointsRound19, suarez, gremio final standing

const CheckResults = () => {
  const [userPredictions, setUserPredictions] = useState(null);
  const [finalResults, setFinalResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let leaderboard = [];
  // let { username } = useParams();

  // Function that creates Leaderboard
  const createLeaderboard = () => {
    userPredictions.map((item) => {
      leaderboard.push({
        user: item.user,
        total: 0,
        roundpoints: [],
        suarez: item.suarez,
        gremioPosition: item.posicao,
      });
      finalResults.map((matchround) => {
        // calculates points
        let pointsAwarded = calculate(
          item.scores[matchround.round - 1].score1,
          item.scores[matchround.round - 1].score2,
          matchround.finalScore1,
          matchround.finalScore2,
          matchround.round
        );

        // adds points to total point of each user
        leaderboard[leaderboard.length - 1].total =
          leaderboard[leaderboard.length - 1].total + pointsAwarded;

        // adds point in each round to an array in leaderboard
        leaderboard[leaderboard.length - 1].roundpoints[matchround.round] = [
          pointsAwarded,
        ];
        return leaderboard;
      });
      return leaderboard;
    });
  };
  // END OF Function that creates Leaderboard

  //  Function that calculates points from each user
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

  useEffect(() => {
    setIsLoading(true);
    const getAllData = async () => {
      try {
        const response = await instance.get("/api/v1/scores");
        if (response.data) {
          setUserPredictions(response.data.scores);
        } else {
          setUserPredictions(null);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const response = await instance.get("/api/v1/results");
        if (response.data) {
          setFinalResults(response.data.results);
        } else {
          setFinalResults(null);
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
  if (!userPredictions && !finalResults) {
    return <p>No data...</p>;
  } else {
    createLeaderboard();
    return (
      <div className="App">
        <div className="AppGlass">
          <LeaderContext.Provider value={leaderboard}>
            <Sidebar />
            <MainDash />
            <RightSide />
          </LeaderContext.Provider>
        </div>
      </div>
    );
  }
};

export default CheckResults;
