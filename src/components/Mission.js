"use client";
import { motion } from "framer-motion";

export default function Mission() {
  const expansionData = [
    {
      label: "Current",
      value: "600 acres",
      color: "bg-green-500",
      progress: 10,
    },
    {
      label: "December 2025",
      value: "6,000 acres",
      color: "bg-blue-500",
      progress: 50,
    },
    {
      label: "Target (24 months)",
      value: "60,000 acres",
      color: "bg-purple-500",
      progress: 100,
    },
  ];
  return (
    <section
      id="mission"
      className="section-padding bg-gradient-to-br from-green-50 to-blue-50"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            The <span className="text-green-600">Impact</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Project Chittoor reverses rural-to-urban migration by providing
            farmers with the tools they need to thrive on their land. It keeps
            rural communities intact and turns marginal farmers into prosperous,
            empowered entrepreneurs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Our Journey
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The initiative started with 600 acres in Chittoor district, Andhra
              Pradesh, where landowners have contributed to a farmer-operated
              co-operative. This serves as a blueprint for rural revitalization
              for the rest of India.
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
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-6">
              Expansion Plans
            </h4>
            <div className="space-y-6">
              {expansionData.map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full ${item.color}`}
                      ></div>
                      <span className="font-medium text-gray-700">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-xl font-bold text-gray-800">
                      {item.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 lg:p-12 text-center shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Our <span className="text-green-600">Vision</span> for Rural India
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We envision a thriving rural ecosystem where farmers are not just
            food producers but also energy generators, tourism facilitators, and
            knowledge creators. Through our integrated approach combining
            sustainable agriculture, renewable energy, education, and wellness
            tourism, we aim to transform rural communities into self-sufficient,
            prosperous hubs that attract rather than repel the next generation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
