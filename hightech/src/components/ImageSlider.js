import React, { useState, useEffect } from 'react';
import image1 from './assets/images/img1.jpg';
import image2 from './assets/images/img2.png';
import image3 from './assets/images/img3.png';
import image4 from './assets/images/img4.jpg';
import image5 from './assets/images/img5.jpg';

const images = [image1, image2, image3, image4, image5];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000"
          style={{
            left: `${(index - currentImageIndex) * 100}%`,
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ))}

      {/* Overlay Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-5 bg-black bg-opacity-50 rounded-xl w-full max-w-[90%] sm:max-w-[80%]">
        <h1 className="text-4xl sm:text-xl lg:text-3xl font-bold leading-tight">
          Our platform courses designed for your success.
        </h1>
        <p className="mt-5 text-xl sm:text-lg">Explore</p>
        <div className="mt-8">
          <a
            href="/courses"
            className="text-lg sm:text-base md:text-lg border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-white"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
