import { CommentData } from "@/data/data"

const Comment = () => {
  return (
        <section className="bg-white dark:bg-black py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
    
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">client say about me</h2>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300 sm:text-lg leading-relaxed">
                Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast beginning signs open god you're gathering ithe
              </p>
            </div>
    
            {/* Service Grid */}
            <div className="grid gap-8 sm:grid-cols-2 ">
                {CommentData.map((data) => (
                    <div key={data.id}
                    className="flex gap-2.5 bg-[#b1aaaa] py-3.5 px-4 box-border"
                    >
                    <img src={data.image} alt="" />
                    <div>
                        <h3 className="text-2xl font-semibold mb-2.5">{data.name}</h3>
                        <p>{data.details}</p>
                    </div>
                </div>
                ))}
                
            </div>
    
          </div>
        </section>
  )
}

export default Comment
