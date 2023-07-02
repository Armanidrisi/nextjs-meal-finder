import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "./components/Navbar";

export const metadata = {
  title: "Meals Finder",
  description:
    "Discover delicious meals with our Meals Finder web app. Search for recipes, get details and ingredients, and enjoy cooking at home.",
  keywords: "meals, recipes, cooking, food, ingredients, meal finder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container my-4">{children}</div>
      </body>
    </html>
  );
}
