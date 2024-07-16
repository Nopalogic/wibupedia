import Navbar from "@/components/Navbar";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Wibupedia",
  description: "Website for make anime reviews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} bg-neutral-900 text-white`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="mx-4 mt-16">{children}</main>
        <footer className="bg-slate-900 text-gray-400">
          <div className="px-5 py-4">
            <p className="text-center text-sm">
              &copy; 2024 Wibupedia | All rights reserved
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
