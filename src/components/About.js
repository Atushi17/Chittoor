"use client";
import { motion } from "framer-motion";
import { Leaf, Users, Lightbulb, Heart } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Farming",
      description:
        "Distributed solar infrastructure where farmers become energy producers, creating reliable supply and additional revenue streams.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Agro-Wellness Tourism",
      description:
        "Farm tours, hands-on experiences, and wellness retreats focusing on Ayurveda and natural healing in rural settings.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Rural Education",
      description:
        "Digital learning hub bridging traditional and future-ready education, bringing rural schools on par with metro cities.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Village Development",
      description:
        "Platform for young entrepreneurs to test concepts aligned with sustainability pillars, fostering practical solutions.",
    },
  ];

  const objectives = [
    {
      icon: "🌱",
      title:
        "Demonstrate innovative sustainable farming, energy, and education practices",
    },
    {
      icon: "👥",
      title:
        "Show path for 44 crore farming families to make a middle-class living",
    },
    {
      icon: "🏙️",
      title: "Eliminate dependency on MNREGA and reduce urban migration",
    },
    {
      icon: "💼",
      title: "Boost local economy through job creation and skill development",
    },
  ];
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 pt-12">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            About The <span className="text-green-600">Chittoor</span>{" "}
            <span className="text-blue-600">Project</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Project Chittoor is a rural revitalization initiative focusing on
            sustainable development and community living. It aims to reverse
            rural-to-urban migration and empower farmers to thrive on their own
            land.
          </motion.p>
        </div>

        {/* Pillars Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group hover:bg-green-50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <div className="text-green-600">{pillar.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our mission is to reshape broad trends in India by fostering
              sustainable rural development and community living, ultimately
              leading to long-term productivity growth without causing
              environmental and social harm.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We aim to create a suitable environment for the next generation to
              thrive by boosting revenue per acre, creating supplemental income
              streams, revamping education systems, and establishing appropriate
              organizational structures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              Key Objectives
            </h3>
            <div className="space-y-4">
              {objectives.map((obj, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-2xl flex-shrink-0">{obj.icon}</span>
                  <p className="text-gray-700">{obj.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
