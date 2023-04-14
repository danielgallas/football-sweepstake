const DisplayWinners = (winners) => {
  return (
    <>
      <div>
        <b>Points:</b>
      </div>
      {winners.winners.map((item) => (
        <div key={Math.random()}>
          {item.user}: {item.points} points
        </div>
      ))}
    </>
  );
};

export default DisplayWinners;
