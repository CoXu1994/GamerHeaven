import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WishList from "./components/Wishlist";
import Layout from "./components/Layout";
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
              path: "wish-list",
              element: <WishList />,
          },
        ],
    },
    
  ]);


export default router;