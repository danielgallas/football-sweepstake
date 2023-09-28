import "./App.css";
import React, { useState, useEffect } from "react";
import useFetch from "./NEW_hooks/useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Calculate from "./NEW_utils/Calculate";
import Navbar from "./NEW_components/Navbar";
import Leaderboard from "./NEW_features/Leaderboard";
import LastMatch from "./NEW_features/LastMatch";
import NextMatch from "./NEW_features/NextMatch";
import AllMatchesRound from "./NEW_features/AllMatchesRound";
import AllMatchesUser from "./NEW_features/AllMatchesUser";

function AppNew() {
  // EXPLAINING ALL THE VARIABLES:
  //
  // Two sets of data are fetched from database:
  // 1) finalResults - these are the actual results of Gremio matches
  //    it is an array with the following items: _id, round, finalScore1, finalScore2
  // 2) userPredictions - these are the predictions made by each user
  //    it is an array with the following items: posicao, scores (an array with _id, round, score1, score2), suarez, user), finalSubmit (not used), isLoading (not used)
  // From these two data sets a third data set is created:
  // 3) orderedLeaderBoard - an ordered list of users and how many points they earned. It is created with the Calculate function
  //    This is an array with: user, points and position

  const [finalResults, setFinalResults] = useState(null);
  const [userPredictions, setUserPredictions] = useState(null);

  const { scores, results, loading, error } = useFetch();

  useEffect(() => {
    setUserPredictions(scores);
    setFinalResults(results);
  }, [scores, results]);

  if (userPredictions && finalResults) {
    let leaderdata = Calculate(userPredictions, finalResults);
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Leaderboard data={leaderdata} />} />
          <Route
            path="/leaderboard"
            element={<Leaderboard data={leaderdata} />}
          />
          <Route
            path="/lastmatch"
            element={
              <LastMatch data={{ userPredictions, finalResults, leaderdata }} />
            }
          />
          <Route
            path="/nextmatch"
            element={<NextMatch data={{ userPredictions, finalResults }} />}
          />
          <Route
            path="/allrounds"
            element={
              <AllMatchesRound
                data={{ userPredictions, leaderdata, finalResults }}
              />
            }
          />
          <Route
            path="/allusers"
            element={<AllMatchesUser data={{ userPredictions, leaderdata }} />}
          />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    );
  } else if (loading) {
    return <Loading />;
  } else if (error) {
    return <Loading />;
    // console.log(error);
  }
}
export default AppNew;
