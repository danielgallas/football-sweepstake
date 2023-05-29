const DisplayWinners = (winners) => {
  const sortedWinners = winners.winners.sort(function (a, b) {
    return b.total - a.total;
  });
  return (
    <>
      <div>
        <b>Leaders:</b>
      </div>
      {sortedWinners.map((item) => (
        <div key={Math.random()}>
          {item.user}: {item.total} points
        </div>
      ))}
    </>
  );
};

export default DisplayWinners;
