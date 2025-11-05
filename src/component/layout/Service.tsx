import { ServiceData } from "@/data/data"

const Service = () => {
  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">Service Offers</h2>
          <p className="mt-4 text-base text-gray-700 dark:text-gray-300 sm:text-lg leading-relaxed">
            Is give may shall likeness made yielding spirit a itself together created after seas...
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ServiceData.map((service) => (
            <div key={service.id} className="border rounded-xl shadow-sm p-6 bg-white text-center hover:drop-shadow-2xl transition">
              <img src={service.image} alt={service.name} className="mx-auto h-16 w-16 object-contain mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.details}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Service
