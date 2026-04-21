import { useParams } from "react-router-dom";

function LearnPosts() {
  const { category } = useParams();

  const allPosts = {
    javascript: [
      {
        id: 1,
        title: "JS Variables সহজভাবে",
        subtitle: "JavaScript Basics",
        desc: "let, const, var কীভাবে কাজ করে সেটা শিখো।",
        readTime: "3 min read",
        date: "Apr 21, 2026",
        tags: ["JS"]
      },
      {
        id: 2,
        title: "JavaScript Promise",
        subtitle: "Async JS",
        desc: "Promise কীভাবে কাজ করে বুঝো।",
        readTime: "5 min read",
        date: "Apr 20, 2026",
        tags: ["Async"]
      }
    ],

    css: [
      {
        id: 3,
        title: "Flexbox Guide",
        subtitle: "CSS Layout",
        desc: "Flexbox দিয়ে layout বানানো শিখো।",
        readTime: "4 min read",
        date: "Apr 18, 2026",
        tags: ["CSS"]
      }
    ],

    react: [
      {
        id: 4,
        title: "useState Hook",
        subtitle: "React Basics",
        desc: "React state management শিখো।",
        readTime: "3 min read",
        date: "Apr 19, 2026",
        tags: ["React"]
      }
    ]
  };

  const posts = allPosts[category] || [];

  return (
    <section className="w-full mt-20 flex justify-center px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">

        <h2 className="col-span-full text-2xl font-bold mb-5">
          {category?.toUpperCase()} POSTS
        </h2>

        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-amber-400 p-5 rounded-lg hover:scale-[1.03] transition"
          >
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <h5 className="text-sm text-gray-300">{post.subtitle}</h5>

            <p className="text-gray-400 text-sm mt-2">
              {post.desc}
            </p>

            <div className="flex justify-between text-xs text-gray-500 mt-3">
              <span>{post.readTime}</span>
              <span>{post.date}</span>
            </div>

            <div className="flex gap-2 mt-3 flex-wrap">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs border border-gray-500 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button className="w-full mt-4 bg-amber-400 text-black py-2 rounded hover:bg-amber-300 transition">
              Read More
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}

export default LearnPosts;