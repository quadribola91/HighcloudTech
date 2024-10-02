// Enroll.js
import React, { useState } from 'react';

const courses = [
  { id: 1, name: 'Front-End Development' },
  { id: 2, name: 'Back-End Development' },
  { id: 3, name: 'Data Science' },
  { id: 4, name: 'UI/UX Designer' },
  { id: 5, name: 'Cybersecurity' },
  { id: 6, name: 'Digital Marketing' },
  { id: 7, name: 'Game Development' },
  { id: 8, name: 'Mobile App Development' },
  { id: 9, name: 'Full-stack Development' },
  { id: 10, name: 'Robotics' },
  // Add more courses as needed
];

const Enroll = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(courses[0]?.id || ''); // Default to first course

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, course: selectedCourse };

    try {
      // Replace with your API endpoint
      const response = await fetch('https://your-api-endpoint/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Enrollment successful!');
        // Reset form or redirect if needed
      } else {
        alert('Failed to enroll, please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred, please try again.');
    }
  };

  return (
    <div className="enroll-container p-16">
      <h1 className="text-3xl font-extrabold text-blue-800">Welcome to the Enrollment Page!</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="course" className="block text-sm font-medium text-gray-700">Select Course</label>
          <select
            id="course"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="mt-6 w-full rounded bg-yellow-300 px-4 py-2 text-blue-600 hover:bg-yellow-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Enroll;
