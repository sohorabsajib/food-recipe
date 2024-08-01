import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Favourites from "./components/Favourites/Favourites";
import Details from "./components/Details/Details";
import GlobalState from "./context";




const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/favourites",
        element: <Favourites />
      },
      {
        path: "recipe-item/:id",
        element: <Details />
      }

    ]
  }

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <React.StrictMode>
      
      
      <GlobalState>
      <RouterProvider router={router}/>
      </GlobalState>
     
      

    </React.StrictMode>
  
);
