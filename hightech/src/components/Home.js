import React, { useState, useEffect } from 'react';
import Courses from './Courses';
import Training from './Training';

const images = [
  'https://www.angularjsindia.com/blog/wp-content/uploads/2022/01/front-end-development-roadmap-1200x675.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHiv4g47zFoMtMRQY0txvrVK447WFe_MYPg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx19U5WunxBln5RdvRH3Vu2KnFd1I8xgUJjg&s',
  'https://www.kdnuggets.com/wp-content/uploads/c_free_data_analyst_bootcamp_beginners_1.png' // Updated direct image link
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Scroll to top on component mount with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left Side for Company Message */}
        <div className="flex flex-col justify-center px-8 bg-white text-white">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-blue-800">
            Information Technology
            <strong className="block font-extrabold text-yellow-300"> Natural Intelligence. </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl text-blue">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="block w-full rounded bg-yellow-300 px-12 py-3 text-sm font-medium text-blue-600 shadow hover:bg-yellow-400 focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto"
            >
              Enroll now
            </a>

            <a
              className="inline-flex items-center gap-2 rounded border border-blue-400 bg-transparent px-8 py-3 text-blue-600 hover:bg-blue-800 focus:outline-none focus:ring active:bg-blue-600"
              href="/courses"
            >
              <span className="text-sm font-medium"> Explore Courses </span>
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side for Rotating Images */}
        <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional: Add a dim effect on images */}
        </div>
      </section>

      {/* Separate Training Component */}
      <Training />
    </>
  );
};

export default Home;
