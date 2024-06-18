"use client";

import { GRID, PLAYERS } from "@/app/constants";
import Square from "./Square";
import { useMemo, useState } from "react";
import { checkIfWin, initializePlayers, processGameData } from "@/app/helpers";
import Thinking from "./Thinking";

const Board = ({ gameData }) => {
  const gameConfig = useMemo(() => processGameData(gameData), [gameData]);
  const [gameNumber, setGameNumber] = useState(0);
  const [curentTurn, setCurrentTurn] = useState(0); // 0/1, as this is a two player game
  const [isThinking, setIsThinking] = useState(false);
  const [winner, setWinner] = useState(null);
  const [players, setPlayers] = useState(() =>
    initializePlayers(PLAYERS, gameNumber)
  );

  const [board, setBoard] = useState(() =>
    Array(GRID.row * GRID.col).fill(null)
  );

  const handleOnSquareClick = ({ id }) => {
    if (winner || winner === 0) return;

    const newBoard = [...board];
    const player = players[curentTurn];
    newBoard[id] = player;
    setBoard(newBoard);

    const isWin = checkIfWin(newBoard, player);
    if (isWin) {
      setWinner(curentTurn);
      const allPlayers = [...players];
      allPlayers[curentTurn].score += 1;
      setPlayers(allPlayers);
    }
    setCurrentTurn(curentTurn === 1 ? 0 : 1);
  };

  const handleGameReset = () => {
    setGameNumber((prevGameNumber) => prevGameNumber + 1);
    setCurrentTurn(0);
    setBoard(() => Array(GRID.row * GRID.col).fill(null));
    setWinner(null);
  };

  return (
    <div className="main-container">
      <div>
        <h2>Hi Arunita 🌻</h2>
        <h4>Kiman kaam koriba aru?</h4>
        <div
          style={{
            width: "100%",
            height: 0,
            paddingBottom: "125%",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <iframe
            src="https://giphy.com/embed/21GCae4djDWtP5soiY"
            width="100%"
            height="100%"
            style={{ position: "absolute" }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="Giphy Embed"
          ></iframe>
        </div>
      </div>
      {/* <div className="board">
        {board.map((_, index) => (
          <Square
            key={`box-${index}`}
            id={index}
            reservedBy={board[index]}
            onClick={handleOnSquareClick}
          />
        ))}
      </div>
      <Thinking />
      <div>
        Score: {players[0].name} -- {players[0].score}
      </div>
      <button onClick={handleGameReset}>Reset game</button> */}
    </div>
  );
};

export default Board;
