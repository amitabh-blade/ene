export const GOOGLE_SHEET_API_KEY = "AIzaSyBDbJFHDzhdDYdCT-KOKn1WJGcHkBrOHYk";
export const GOOGLE_SHEET_ID = "1Z-KWmaOCGmCI4HDYEUYygrdrjZxYx8G45d-0NOOjdXA";
export const GOOGLE_SHEET_FETCH_URL =
  "https://sheets.googleapis.com/v4/spreadsheets";

export const CHARACTERS = {
  X: "X",
  O: "O",
};

export const GRID = {
  row: 3,
  col: 3,
};

export const PLAYER_CONFIG = {
  score: 0,
  name: "Player",
  character: CHARACTERS.X,
  id: "player",
};

export const PLAYERS = [
  PLAYER_CONFIG,
  {
    ...PLAYER_CONFIG,
    name: "Computer",
    id: "computer",
  },
];
