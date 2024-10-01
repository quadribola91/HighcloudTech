import React, { useEffect, useRef } from 'react';

const Training = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    
    const animateText = () => {
      if (textElement) {
        textElement.classList.remove('translate-x-full'); // Start from the left
        textElement.classList.add('transition-transform', 'duration-1000', 'translate-x-0'); // Slide in
        setTimeout(() => {
          textElement.classList.remove('translate-x-0'); // Slide out
          textElement.classList.add('translate-x-full');
        }, 3000); // Stay visible for 3 seconds before sliding out
      }
    };

    animateText();
    const intervalId = setInterval(animateText, 5000); // Repeat every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Elevate Your Skills with HighCloud Tech Comprehensive Training Program!</h2>
        <p className="text-lg text-center mb-6">
          No worries! Our training program is designed to equip you with essential skills and insights in Technology development, team management, and project management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md shadow-blue-200 hover:shadow-blue-300 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <h3 className="text-xl font-semibold mb-4">Comprehensive Training</h3>
            <p>Our program covers web development, team management, project management, and more. You will gain hands-on experience and valuable knowledge that can set you apart in the industry.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md shadow-blue-200 hover:shadow-blue-300 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <h3 className="text-xl font-semibold mb-4">Industry Insights</h3>
            <p>
              Learn from experienced professionals who will provide you with insights into current industry practices and expectations, preparing you for a successful career.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md shadow-blue-200 hover:shadow-blue-300 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <h3 className="text-xl font-semibold mb-4">Personalized Guidance</h3>
            <p>
              Receive personalized mentorship to help you navigate your learning journey. Our experts are here to support you every step of the way, ensuring you get the most out of your training experience.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p
            ref={textRef}
            className="text-lg mb-4 translate-x-full" // Start hidden off the right
          >
            Ready to take your skills to the next level? Join our training program today and start your journey towards a successful career in web development!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Training;
