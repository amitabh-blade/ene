import Board from "@/components/Board";
import styles from "./page.module.css";
import {
  GOOGLE_SHEET_API_KEY,
  GOOGLE_SHEET_ID,
  GOOGLE_SHEET_FETCH_URL,
} from "./constants";

async function getData() {
  const res = await fetch(
    `${GOOGLE_SHEET_FETCH_URL}/${GOOGLE_SHEET_ID}/values/tictactoe!A1:Z1000?key=${GOOGLE_SHEET_API_KEY}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const docsData = await getData();

  return (
    <main className={styles.main}>
      <Board gameData={docsData} />
    </main>
  );
}
