"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const projectsData = [
    {
      title: "Renewable Energy",
      description:
        "Distributed solar infrastructure where farmers become energy producers.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      category: "Energy",
      tags: ["Solar", "Sustainability", "Revenue"],
    },
    {
      title: "Agro-Wellness Tourism",
      description:
        "Farm tours, hands-on experiences, and wellness retreats focusing on Ayurveda.",
      image:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
      category: "Tourism",
      tags: ["Wellness", "Ayurveda", "Experience"],
    },
    {
      title: "Transformative Education",
      description:
        "Digital learning hub bridging traditional and future-ready education.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      category: "Education",
      tags: ["Digital", "Learning", "Rural"],
    },
    {
      title: "Sustainable Agriculture",
      description:
        "Food 'forest farms' to renew soil, build water reservoirs, and enhance biodiversity.",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
      category: "Agriculture",
      tags: ["Organic", "Biodiversity", "Soil"],
    },
    {
      title: "Test Bed for Innovation",
      description:
        "A platform for young entrepreneurs to test concepts aligned with sustainability.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "Innovation",
      tags: ["Startups", "Testing", "Solutions"],
    },
    {
      title: "Village Development",
      description:
        "Comprehensive rural development focusing on infrastructure and healthcare.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      category: "Development",
      tags: ["Infrastructure", "Healthcare", "Community"],
    },
  ];
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-green-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive initiatives transforming rural
            communities through sustainable development and innovative
            solutions.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed h-20">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>{" "}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
