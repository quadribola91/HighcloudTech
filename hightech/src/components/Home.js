import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import AboutUs from './About';
import Training from './Training';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleEnrollNow = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <ImageSlider />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          height: '100vh',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px',
            backgroundColor: 'white',
          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1E3A8A', textAlign: 'center' }}>
            Information Technology
            <strong style={{ display: 'block', fontWeight: 'bold', color: '#FBBF24' }}>
              Natural Intelligence.
            </strong>
          </h1>
          <p
            style={{
              marginTop: '16px',
              maxWidth: '700px',
              fontSize: '1.25rem',
              textAlign: 'center',
              color: '#2563EB',
            }}
          >
            Explore our extensive selection of highly sought-after beginner-friendly tech courses,
            meticulously designed to empower and inspire learners at every step of their educational
            journey.
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link
              to="/enroll"
              style={{
                display: 'block',
                width: 'auto',
                borderRadius: '8px',
                backgroundColor: isHovered ? '#F9D51F' : '#FBBF24', // Lighter color on hover
                padding: '12px 48px',
                fontSize: '1rem',
                color: '#2563EB',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease', // Smooth transition
              }}
              onMouseEnter={() => setIsHovered(true)} // Trigger hover
              onMouseLeave={() => setIsHovered(false)} // Trigger hover end
            >
              Enroll now
            </Link>
          </div>
        </div>
      </div>

      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              width: '300px',
            }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Enroll in Our Courses!</h2>
            <p style={{ marginTop: '8px' }}>
              Our Front-End, UI/UX design, and Digital Marketing courses start on February 5th! 2025
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
              <button
                onClick={handleEnrollNow}
                style={{
                  backgroundColor: '#FBBF24',
                  color: '#2563EB',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <Link to="/enroll" style={{ textDecoration: 'none', color: '#2563EB' }}>
                  Enroll Now
                </Link>
              </button>
              <button
                onClick={handleCancel}
                style={{
                  backgroundColor: '#D1D5DB',
                  color: '#374151',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <AboutUs />
      <Training />
    </div>
  );
};

export default Home;
