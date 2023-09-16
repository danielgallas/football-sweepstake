// import React from "react";

const CheckResults = (userPredictions, finalResults) => {
  let leaderboard = [];

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
        let pointsAwarded = 0;
        if (!item.scores[matchround.round - 1]) {
          pointsAwarded = 0;
        } else {
          pointsAwarded = calculate(
            item.scores[matchround.round - 1].score1,
            item.scores[matchround.round - 1].score2,
            matchround.finalScore1,
            matchround.finalScore2,
            matchround.round
          );
        }
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

  // Function that orders the leaderboard
  const orderLeaderboard = () => {
    // Creates array with right positions of players
    let usersPoints = leaderboard.map((item) => {
      return { user: item.user, points: item.total };
    });
    let sortedLeaderboard = usersPoints.sort(function (a, b) {
      return b.points - a.points;
    });
    let leaderboardPositions = sortedLeaderboard.map((item, index) => {
      return { user: item.user, points: item.points, position: index + 1 };
    });
    let finalLeaderboard = leaderboardPositions.map((item, index) => {
      if (index - 1 >= 0) {
        if (item.points === leaderboardPositions[index - 1].points) {
          item.position = leaderboardPositions[index - 1].position;
        }
      }
      return item;
    });
    return finalLeaderboard;
  };
  // END OF Function that orders the leaderboard
  //  Function that calculates points from each user
  const calculate = (prediction1, prediction2, final1, final2, round) => {
    // ROUND 15 POSTPONED: CORINTHIANS
    if (round === 15) {
      return 0;
    }
    // END OF ROUND 15 POSTPONED: CORINTHIANS
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
  createLeaderboard();
  let orderedLeaderboard = orderLeaderboard();
  return orderedLeaderboard;
};

export default CheckResults;
