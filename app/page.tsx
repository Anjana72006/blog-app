import { getPosts } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiCalendar, FiHeart, FiUser } from "react-icons/fi";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-black text-white py-28">
        <div className="absolute inset-0 opacity-20">
  <div className="absolute top-10 left-20 h-72 w-72 rounded-full bg-emerald-500 blur-3xl"></div>

  <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-cyan-500 blur-3xl"></div>
</div>
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            Welcome to My Blog
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
            Discover Amazing
            <span className="text-emerald-400"> Tech Articles</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
            Read articles on React, Next.js, Artificial Intelligence,
            Programming, Web Development and much more.
          </p>

          <div className="mt-8">
            <a
              href="#blogs"
             className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-600">
              Explore Blogs
              <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blogs"
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="flex items-center justify-between mb-10">

          <div>
            <h2 className="text-4xl font-bold dark:text-white">
              Latest Blogs
            </h2>

            <p className="text-gray-500 mt-2">
              {posts.length} Articles Available
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {posts.map((post) => (

            <article
              key={post.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >

              <div className="overflow-hidden">

                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">

                  {post.category}

                </span>

                <h2 className="text-2xl font-bold mt-4 dark:text-white">

                  {post.title}

                </h2>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-4">

                  <span className="flex items-center gap-1">
                    <FiUser />
                    {post.author}
                  </span>

                 
                  
                </div>

                <p className="text-gray-600 dark:text-gray-300 mt-5 line-clamp-3">

                  {post.content}

                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="flex items-center gap-2 text-red-500 font-medium">

                    <FiHeart />

                    {post.likes}

                  </span>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Read More
                    <FiArrowRight />
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}