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
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100vh',
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: `${(index - currentImageIndex) * 100}%`,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'left 1s ease-in-out',
          }}
        ></div>
      ))}

      {/* Overlay Text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          borderRadius: '10px',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          Our platform courses designed for your success.
        </h1>
        <p style={{ marginTop: '20px', fontSize: '1.25rem' }}>Explore</p>
        <div style={{ marginTop: '30px' }}>
          <a
            href="/courses"
            style={{
              textDecoration: 'none',
              border: '2px solid #FBBF24',
              color: '#FBBF24',
              padding: '10px 20px',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            Explore Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
