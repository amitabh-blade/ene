import { CHARACTERS } from "./constants";

export const processGameData = (gameData) => {
  const { values } = gameData;
  const config = values.reduce(
    (acc, value, index) => ({ ...acc, [value[0]]: values[index][1] }),
    {}
  );
  return config;
};

export const initializePlayers = (players, gameTurn, winner = null) => {
  const isEvenGameNumber = gameTurn % 2 == 0;
  const copiedPlayers = [...players];

  copiedPlayers[0].character = isEvenGameNumber ? CHARACTERS.X : CHARACTERS.O;
  copiedPlayers[1].character = isEvenGameNumber ? CHARACTERS.O : CHARACTERS.X;

  return copiedPlayers;
};

export const checkIfWin = (board, player) => {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (let combo of winCombos) {
    if (combo.every((i) => board[i]?.id === player.id)) {
      return player;
    }
  }
  return false;
};
