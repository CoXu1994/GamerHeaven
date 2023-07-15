import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WishList from "./components/Wishlist";
import Layout from "./components/Layout";
import Categories from "./components/Categories";
import GameCard from "./components/gameCard";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
          {
              path: "/",
              element: <App />
          },
          {
            path: "gameCard/:gameId",
            element: <GameCard />
          },
          {
              path: "wish-list",
              element: <WishList />,
          },
          {
              path: "categories",
              element: <Categories />,
          },
        ],
    },
    
  ]);


export default router;