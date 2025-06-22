import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chittoor Project | Empowering Rural Communities",
  description:
    "A rural revitalization initiative focusing on sustainable development and community living in Andhra Pradesh, India.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>
        {/* The Navbar and Footer are now rendered by page.js, not here. */}
        {children}
      </body>
    </html>
  );
}
