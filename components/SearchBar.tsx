"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto mb-12">

      <div className="relative">

        <FiSearch className="absolute left-5 top-4 text-xl" />

        <input
          placeholder="Search articles..."
          className="w-full border rounded-full py-4 pl-14 pr-5 dark:bg-slate-800"
        />

      </div>

    </div>
  );
}