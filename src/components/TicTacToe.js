export default function TicTacToe({ boxes, handleClick, winner, clearButton }) {
  return (
    <>
      <header>
        <h3>winner: {winner}</h3>
      </header>
      <div className="flexbox-container">
        {boxes.map((box) => {
          // console.log(box);
          return (
            <button
              key={box.index}
              value={box.index}
              className="flexbox-item"
              onClick={(e) => handleClick(box, e)}
            >
              {box.selected}
            </button>
          );
        })}
      </div>
      <br />
      {winner ? (
        <button className="clear-btn" onClick={clearButton}>
          Play again?
        </button>
      ) : (
        ""
      )}
    </>
  );
}
