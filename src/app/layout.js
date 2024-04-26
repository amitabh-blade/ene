import { Lato } from "next/font/google";
import "./globals.css";

const LatoFont = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Add '400' for regular and '600' for semibold
});

export const metadata = {
  title: "Ene",
  description: "Moiu najanu ki bonaisu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={LatoFont.className}>{children}</body>
    </html>
  );
}
