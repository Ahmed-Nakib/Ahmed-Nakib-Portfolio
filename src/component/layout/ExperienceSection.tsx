import { ExperienceSectionData } from "@/data/data"
import { Phone } from "lucide-react"

const ExperienceSection = () => {
  return (
    <section className="w-full py-16 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-3 gap-10 items-center">
        
        {/* Left: Logo Grid */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {ExperienceSectionData.map((logo) => (
            <div
              key={logo.id}
              className="border rounded-lg shadow-sm p-6 flex items-center justify-center hover:bg-black dark:hover:bg-white transition"
            >
              <img src={logo.image} alt="" className="max-h-12 object-contain" />
            </div>
          ))}
        </div>

        {/* Right: Experience Card */}
        <div className="border rounded-2xl shadow-md bg-white dark:bg-black  p-6 md:p-8 space-y-6">
          <div className="flex items-start gap-4">
            <span className="text-5xl font-bold text-purple-600">10</span>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-tight">
              Years <br /> Experience <br /> Working
            </p>
          </div>

          <div className="border-t pt-4">
            <p className="text-xs uppercase text-purple-500 font-medium">Call us now</p>
            <div className="flex items-center gap-2 mt-2">
              <Phone className="text-black w-5 h-5" />
              <span className="text-lg font-semibold">(+1)-800-555-6789</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ExperienceSection
