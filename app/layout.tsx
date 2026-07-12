import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className="bg-gray-50 dark:bg-slate-950 dark:text-white transition-colors">

        <Providers>

          <Navbar />

          {children}

        </Providers>

      </body>

    </html>
  );
}