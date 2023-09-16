import React, { useState, useEffect } from "react";
import useFetch from "../NEW_hooks/useFetch";
import Loading from "../NEW_components/Loading";
import Calculate from "../NEW_utils/Calculate";
import Leaderboard from "../NEW_components/Leaderboard";

const Dashboard = () => {
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
    let orderedLeaderboard = Calculate(userPredictions, finalResults);
    return <Leaderboard data={orderedLeaderboard} />;
  } else if (loading) {
    return <Loading />;
  } else if (error) {
    console.log(error);
  }
};
export default Dashboard;
