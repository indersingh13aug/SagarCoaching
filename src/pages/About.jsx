import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">About Bright Future Institute</h1>

      <p className="text-gray-700 text-lg mb-6">
        Bright Future Institute is a premier coaching center dedicated to providing top-tier education to aspiring students
        preparing for NEET, IIT JEE, and UPSC examinations. With a team of highly experienced and passionate educators, we
        aim to build a strong academic foundation and foster critical thinking and problem-solving abilities in our students.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To empower students with knowledge and skills through innovative teaching and personal mentoring, helping them
            achieve their dreams and excel in competitive exams.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To become the most trusted and result-oriented coaching institute, producing top rankers in NEET, JEE, and UPSC,
            and shaping responsible leaders for tomorrow.
          </p>
        </div>
      </div>

      <div className="bg-indigo-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Comprehensive NEET Coaching with expert faculty in Biology, Physics, and Chemistry</li>
          <li>IIT JEE Preparation with focus on conceptual understanding in Maths, Physics & Chemistry</li>
          <li>UPSC Guidance covering GS papers, CSAT, and optional subjects with experienced mentors</li>
          <li>Online and Offline modes with flexible batch timings and doubt-clearing support</li>
          <li>Personalized mentorship, regular tests, and performance tracking</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
