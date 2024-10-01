import React, { useState, useEffect } from 'react';
import Modal from './Modal'; // Ensure the Modal component is imported
import './Courses.css'; // Add a CSS file for styling the courses

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Scroll to top on component mount with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Use the updated course data
    const availableCourses = [
      {
        id: 1,
        title: 'Front-End Developer',
        description: 'Learn HTML, CSS, and JavaScript to build stunning websites.',
        details: 'In this immersive course, you will master essential front-end technologies. Start by building your first web page with HTML, style it using CSS, and bring it to life with interactive JavaScript. By the end, you will create responsive and user-friendly websites.',
        icon: '🌐',
        rating: 4.5,
      },
      {
        id: 2,
        title: 'Back-End Developer',
        description: 'Master server-side programming with Node.js and Express.',
        details: 'This course dives into server-side programming. You will learn to build efficient back-end systems using Node.js and Express, with a focus on database management and user authentication. Develop robust and scalable web applications.',
        icon: '⚙️',
        rating: 4.7,
      },
      {
        id: 3,
        title: 'UI/UX Designer',
        description: 'Design user-friendly interfaces and improve user experience.',
        details: 'Discover user-centered design principles. Create visually appealing interfaces and enhance user experiences through effective design practices. This course covers everything from wireframing to prototyping.',
        icon: '🎨',
        rating: 4.6,
      },
      {
        id: 4,
        title: 'Data Science',
        description: 'Learn Python, data analysis, and machine learning.',
        details: 'Delve into data science with Python programming, data analysis techniques using Pandas and NumPy, and machine learning concepts. Implement predictive models to derive insights from data.',
        icon: '📊',
        rating: 4.8,
      },
      {
        id: 5,
        title: 'Cybersecurity',
        description: 'Protect systems and networks from cyber threats.',
        details: 'This course equips you with knowledge to safeguard networks. Learn about various cyber threats, risk management, and defensive strategies to protect against attacks. Become a cybersecurity expert.',
        icon: '🛡️',
        rating: 4.9,
      },
      {
        id: 6,
        title: 'Digital Marketing',
        description: 'Master online marketing strategies and tools.',
        details: 'Unlock digital marketing secrets. Explore online strategies like SEO and social media marketing. Learn to engage your audience and analyze campaign performance to boost your brand’s presence.',
        icon: '📈',
        rating: 4.3,
      },
      {
        id: 7,
        title: 'Game Development',
        description: 'Create interactive games using Unity and C#.',
        details: 'Step into game development. Learn to design and build games using Unity and C#. This course covers essential topics, from character creation to gameplay mechanics.',
        icon: '🎮',
        rating: 4.4,
      },
      {
        id: 8,
        title: 'Mobile App Development',
        description: 'Build apps for iOS and Android platforms.',
        details: 'Gain skills to develop mobile applications for both iOS and Android. Learn about cross-platform development tools, UI design, and app deployment.',
        icon: '📱',
        rating: 4.5,
      },
      {
        id: 9,
        title: 'Full Stack Development',
        description: 'Build full stack web applications.',
        details: 'Become a full-stack developer. Learn front-end and back-end technologies including HTML, CSS, JavaScript, Node.js, and databases to develop complete web applications.',
        icon: '💻',
        rating: 4.7,
      },
      {
        id: 10,
        title: 'Robotics',
        description: 'Explore the world of robotics with AI.',
        details: 'Dive into robotics fundamentals, including design, programming, and control. Learn about AI integration to create intelligent robots capable of complex tasks.',
        icon: '🤖',
        rating: 4.8,
      },
    ];

    setCourses(availableCourses);
  }, []);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="p-4 shadow-blue-600 hover:shadow-blue-400">
      <div className="courses-list">
        {courses.map(course => (
          <div key={course.id} className="course-card" onClick={() => handleCourseSelect(course)}>
            <h3>{course.icon} {course.title}</h3>
            <p className="font-bold">{course.description}</p>
            <p className="text-green-500 text-md">Rating: {course.rating}</p>
          </div>
        ))}
      </div>
      {selectedCourse && (
        <Modal onClose={handleCloseModal}>
          <h2 className="font-bold">{selectedCourse.title}</h2>
          <p className="text-blue-600 font-bold mt-2 mb-5">{selectedCourse.details}</p>
          <button className='bg-blue-600 hover:bg-blue-300 rounded-2xl p-3 text-white justify-center' onClick={handleCloseModal}>Enroll now</button>
        </Modal>
      )}
    </div>
  );
};

export default Courses;
