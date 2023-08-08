import React, { useState, useEffect } from "react";
import useFetch from "../NEW_hooks/useFetch";
import Loading from "../NEW_components/Loading";
import Calculate from "../NEW_utils/Calculate";

const Dashboard = () => {
  const [finalResults, setFinalResults] = useState(null);
  const [userPredictions, setUserPredictions] = useState(null);

  const { scores, results, loading, error } = useFetch();

  useEffect(() => {
    setUserPredictions(scores);
    setFinalResults(results);
  }, [scores, results]);

  if (userPredictions && finalResults) {
    let orderedLeaderboard = Calculate(userPredictions, finalResults);
    return (
      <>
        <h1>The new Dashboard</h1>
        <p>First step is to fetch the data.</p>
        {orderedLeaderboard.map((item, index) => {
          return (
            <p key={index}>
              {item.position}. {item.user} : {item.points} points
            </p>
          );
        })}
      </>
    );
  } else if (loading) {
    return <Loading />;
  } else if (error) {
    console.log(error);
  }
};
export default Dashboard;
