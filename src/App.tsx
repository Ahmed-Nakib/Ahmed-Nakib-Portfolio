
import Footer from "@/component/layout/Footer"
import Header from "@/component/layout/Header"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Toaster position="top-center" />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
