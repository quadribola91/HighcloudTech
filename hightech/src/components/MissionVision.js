import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section className="p-8 bg-gradient-to-r from-blue-100 to-blue-300 text-center">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="mb-8 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          To empower students with the latest tech skills to excel in the digital world.
        </motion.p>
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          To be the leading online platform for tech education, fostering innovation and creativity.
        </motion.p>
      </div>
    </section>
  );
};

export default MissionVision;
