import { Link } from "react-router-dom";

function LearnWithNakib() {
  const categories = [
    { name: "JavaScript", slug: "javascript" },
    { name: "CSS", slug: "css" },
    { name: "React", slug: "react" }
  ];

  return (
    <section className="w-full mt-25 flex justify-center px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">

        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/learnWithNakib/${cat.slug}`}
            className="border border-amber-400 p-6 rounded-lg text-center hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold">{cat.name}</h2>
            <p className="text-gray-400 text-sm mt-2">
              Explore {cat.name} tutorials
            </p>
          </Link>
        ))}

      </div>
    </section>
  );
}

export default LearnWithNakib;