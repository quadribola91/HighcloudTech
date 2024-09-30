import React, { useEffect } from 'react';

const AboutUs = () => {
  const mission = "To empower students with the latest tech skills to excel in the digital world.";
  const vision = "To be the leading online platform for tech education, fostering innovation and creativity.";
  const goal = "To create a community of learners who collaborate, innovate, and push the boundaries of technology.";

  useEffect(() => {
    // Scroll to top on component mount with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <p className="text-lg text-center mb-12">
          At HighTECH, we believe in the transformative power of technology education. Our platform is dedicated to equipping students with the skills they need to thrive in an ever-evolving digital landscape.
        </p>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md shadow-blue-800 hover:shadow-blue-700 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p>{mission}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md shadow-blue-300 hover:shadow-blue-700 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p>{vision}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md shadow-blue-800 hover:shadow-blue-700 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Our Goal</h3>
            <p>{goal}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
