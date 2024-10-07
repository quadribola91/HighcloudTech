import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // Assuming firebase is set up and imported correctly.
import './Contact.css'; // Import your CSS file for spinner styling

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);  // Show spinner while loading

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
      timestamp: new Date(),
    };

    try {
      // Add form data to Firestore
      await addDoc(collection(db, 'contacts'), formData);
      setSuccessMessage('Your message has been sent successfully!');
    } catch (error) {
      setErrorMessage('Failed to send the message. Please try again.');
    } finally {
      setLoading(false);  // Hide spinner after submission
    }
  };

  useEffect(() => {
    // Clear messages after a few seconds
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  return (
    <section id="contact" className="p-8 bg-gray-50 relative">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows="4"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
          Send
        </button>
      </form>

      {/* Success/Error Message */}
      {successMessage && <p className="text-green-600 text-center mt-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-600 text-center mt-4">{errorMessage}</p>}

      {/* Loading Spinner Overlay */}
      {loading && (
        <div className="overlay">
          <div className="loader"></div>
        </div>
      )}
    </section>
  );
};

export default Contact;
