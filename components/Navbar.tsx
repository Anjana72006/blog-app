import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b bg-white/70 dark:bg-slate-900/70">

      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-black text-blue-600"
        >
          MyBlog
        </Link>

        <nav className="hidden md:flex gap-8">

          <Link href="/">Home</Link>

          <Link href="/">Technology</Link>

          <Link href="/">Programming</Link>

          <Link href="/">AI</Link>

        </nav>

        <ThemeToggle />

      </div>

    </header>
  );
}