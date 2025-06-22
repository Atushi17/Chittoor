import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Us", href: "#contact" },
  ];
  const projectAreas = [
    { name: "Renewable Energy", href: "/projects" },
    { name: "Agro-Wellness", href: "/projects" },
    { name: "Education", href: "/projects" },
  ];

  return (
    <footer className="bg-gray-800 text-white section-padding">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            {" "}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Chittoor Project Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <span className="text-xl font-bold">Chittoor Project</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              A rural revitalization initiative for sustainable development.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Project Areas</h3>
            <ul className="space-y-3">
              {projectAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe for updates on our projects.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Project Chittoor. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 mt-8">
        <div className="container mx-auto text-center text-gray-500">
          Designed for Delight by Harsh ♠️
        </div>
      </div>
    </footer>
  );
}
