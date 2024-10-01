import React, { useEffect } from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to the Google Form (replace with your actual Google Form URL)
    const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?usp=pp_url&entry.1234567890=' + document.getElementById('name').value +
                           '&entry.0987654321=' + document.getElementById('email').value +
                           '&entry.1111111111=' + document.getElementById('message').value;

    window.open(googleFormUrl, '_blank');
  };

  useEffect(() => {
    // Scroll to top on component mount with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section id="contact" className="p-8 bg-gray-50">
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
    </section>
  );
};

export default Contact;
