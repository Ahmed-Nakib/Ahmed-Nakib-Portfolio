import { createBrowserRouter } from "react-router-dom";
import Layout from "./page/Layout";
import HomePage from "./page/HomePage";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default App;