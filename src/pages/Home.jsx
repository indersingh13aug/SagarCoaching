import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnquiryModal from './EnquiryModal';

const Home = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-10 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Bright Future Institute</h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering students for success in NEET, IIT JEE, and UPSC exams
        </p>
        <Link
          to="/courses"
          className="bg-white text-indigo-700 font-semibold py-2 px-6 rounded-full hover:bg-indigo-100 transition"
        >
          View Courses
        </Link>
      </div>

      {/* Highlights */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Our Top Programs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* NEET */}
          <div className="bg-white border shadow p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">NEET Preparation</h3>
            <p className="text-gray-700">
              Comprehensive coaching in Physics, Chemistry & Biology with expert faculty and doubt-solving support.
            </p>
          </div>

          {/* JEE */}
          <div className="bg-white border shadow p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">IIT JEE Preparation</h3>
            <p className="text-gray-700">
              Structured learning for JEE Main & Advanced with focus on concept clarity and practice tests.
            </p>
          </div>

          {/* UPSC */}
          <div className="bg-white border shadow p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">UPSC Preparation</h3>
            <p className="text-gray-700">
              Guided preparation for Prelims, Mains & Interview with top faculty for GS, CSAT & Optional subjects.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-50 py-10 px-4 text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Enroll Now for New Batches!</h2>
        <p className="text-gray-700 mb-6">Limited seats available with exciting early bird offers.</p>
        <Link
          to="/batches"
          className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition"
        >
          Check Upcoming Batches
        </Link>
      </div>

      {/* Vertical Enquire Now Button */}
<button
  onClick={() => setShowEnquiry(true)}
  className="fixed top-1/2 left-4 font-bold text-indigo-700 transform -translate-y-1/2 -rotate-90 origin-left bg-yellow-400 text-black px-3 h-12 rounded-r shadow-lg z-50 flex items-center justify-center"
>
  Enquire Now
</button>

      {/* Modal */}
      <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </div>
  );
};

export default Home;
