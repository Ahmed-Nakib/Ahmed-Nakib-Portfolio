import { CiMail } from "react-icons/ci"
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
      <section className="bg-white dark:bg-black py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 grid justify-center">
            <img src="/img/logo.png" alt="" />
            <span className="text-lg font-bold">FOLLOW ME</span>
            <div className="flex gap-7 text-lg cursor-pointer ">
                <FaFacebook />
                <FaTwitter />
                <FaInstagramSquare />
                <CiMail />
            </div>
          </div>
        </section>
  )
}

export default Footer
