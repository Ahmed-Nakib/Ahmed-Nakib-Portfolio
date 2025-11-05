import { portfolioDetails } from "@/data/data";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

const PortfolioItemDetails = () => {
  const { id } = useParams();
  const project = portfolioDetails.find((item) => item.id.toString() == id);

  if (!project) {
    return <p className="text-center py-16">Project not found</p>;
  }
  return (
     <section className="bg-white dark:bg-black py-16">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
   
           {/* Heading */}
           <div className="text-center max-w-2xl mx-auto">
            <Link to="/portfolio" className="text-purple-600 mb-4 inline-block">← Back to Portfolio</Link>
           <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
           <p className="text-gray-600 mb-4">{project.type}</p>
           <img src={project.img} alt={project.name} className="mb-4 w-full h-auto rounded" />
           <p className="text-gray-700">{project.description}</p>
           </div>
   
         </div>
       </section>
  )
}

export default PortfolioItemDetails
