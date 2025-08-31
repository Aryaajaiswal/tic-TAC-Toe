import "./styles.css";
import TicTacToe from "./components/TicTacToe";
import React, { useEffect } from "react";
import { selectedBoxesPromise } from "./services/boxes.api";
import { useLoading } from "./hook/useLoading";
import { calculateWinner } from "./utils/calculateWinner";

export default function App() {
  const [boxes, setBoxes] = React.useState([]);
  const [currentPlayer, setCurrentPlayer] = React.useState("X");
  const [winner, setWinner] = React.useState("");
  const [isLoading, startLoading, stopLoading] = useLoading();
  console.log(currentPlayer, "turn");

  useEffect(() => {
    startLoading();
    selectedBoxesPromise().then((res) => {
      setBoxes(res);
      stopLoading();
      return;
    });
  }, []);

  const handleClick = (box, e) => {
    // console.log("box", box.selected);
    // console.log("e", e.target.value);
    if (box.selected === "") {
      const newArray = boxes.map((item) => {
        return item.index === box.index
          ? { ...box, selected: (item.selected = currentPlayer) }
          : item;
      });
      // console.log(newArray);
      setBoxes(newArray);
      const switchPlayer = (prev) => {
        return prev === "X" ? "O" : "X";
      };
      setCurrentPlayer(switchPlayer);
    }
  };

  const clearButton = () => {
    const clearBoxes = boxes.map((box) => {
      return {
        ...box,
        selected: (box.selected = "")
      };
    });
    setBoxes(clearBoxes);
    setCurrentPlayer("X");
    setWinner("");
  };

  useEffect(() => {
    const win = calculateWinner(boxes);
    if (win) {
      setWinner(win);
    }
  }, [boxes]);

  return (
    <section className="App">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <TicTacToe
          boxes={boxes}
          handleClick={handleClick}
          setBoxes={setBoxes}
          setCurrentPlayer={setCurrentPlayer}
          winner={winner}
          clearButton={clearButton}
        />
      )}
    </section>
  );
}
