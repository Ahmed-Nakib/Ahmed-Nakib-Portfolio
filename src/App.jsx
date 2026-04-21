import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./page/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import HomePage from "./page/HomePage";
import LearnWithNakib from "./page/LearnWithNakib";
import LearnPosts from "./components/LearnPosts";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "portfolio",
        element: <Portfolio />
      },

      // ✅ Learn system (FIXED)
      {
        path: "learnWithNakib",
        element: <LearnWithNakib />
      },
      {
        path: "learnWithNakib/:category",
        element: <LearnPosts />
      },

      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

export default App;