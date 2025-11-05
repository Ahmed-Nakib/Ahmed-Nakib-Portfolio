import Index from "@/page/Index";
import App from "../App"
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {
        path: "/",
        Component: Index,
      },
    ]
  },

]);

export default router;
