
import Form from "@/component/layout/From";
import MainLayout from "@/component/layout/MainLayout";
import PortfolioItemDetails from "@/component/layout/PortfolioItemDetails";
import AboutPage from "@/page/AboutPage";
import HomePage from "@/page/HomePage";
import PortfolioPage from "@/page/PortfolioPage";
import ServicePage from "@/page/ServicePage";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "services",
        Component: ServicePage,
      },
      {
        path: "portfolio",
        Component: PortfolioPage,
      },
      {
        path: "portfolio/:id",
        Component: PortfolioItemDetails 
      },
      {
        path: "contact",
        Component: Form
      },
    ]
  },

]);

export default router;
