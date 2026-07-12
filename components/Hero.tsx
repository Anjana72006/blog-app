import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-600">

          ✨ Latest Tech Articles

        </span>

        <h1 className="text-6xl font-black mt-6">

          Discover Amazing

          <span className="text-blue-600">

            {" "}Blogs

          </span>

        </h1>

        <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">

          Read the latest articles about React,
          Next.js, AI, Web Development,
          Programming and Technology.

        </p>

        <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex gap-2 items-center mx-auto">

          Explore Blogs

          <FiArrowRight />

        </button>

      </div>

    </section>
  );
}