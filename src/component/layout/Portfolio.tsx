import { useState } from "react"
import { portfolioDetails, portfolioItems } from "@/data/data"
import { GoPlus } from "react-icons/go"
import { Link } from "react-router-dom"

const Portfolio = () => {
  const [filter, setFilter] = useState("ALL") // default ALL

  // filter logic
  const filteredItems =
    filter === "ALL"
      ? portfolioDetails
      : portfolioDetails.filter((item) => item.category === filter)

  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 ">
        <h2 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
          quality work <br /> Recently done project
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4">
          {portfolioItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.name)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                filter === item.name
                  ? "bg-[#9810FA] text-white"
                  : "text-gray-600 hover:text-[#9810FA] border border-gray-300"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Portfolio Items */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-7">
          {filteredItems.map((item) => (
            <div key={item.id}>
              <div className="relative group overflow-hidden rounded-md shadow-md">
                <img src={item.img} alt={item.name} className="w-full h-auto" />
                <div
                  className="absolute inset-0 bg-blue-500/40 flex items-center justify-center
                    opacity-0 -translate-x-full -translate-y-full 
                    group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0
                    transition-all duration-500 ease-in-out"
                >
                  <span className="text-white text-7xl">
                    <GoPlus />
                  </span>
                </div>
              </div>
              <Link
                to={`/portfolio/${item.id}`}
                className="block pt-3 font-semibold uppercase"
              >
                {item.name}
              </Link>
              <span className="text-gray-500 text-sm">{item.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
