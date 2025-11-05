
import Footer from "@/component/layout/Footer"
import Header from "@/component/layout/Header"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
