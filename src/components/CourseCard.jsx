import React from 'react';

const CourseCard = ({ courseName, description, fees, mode, onEnroll }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 m-4 w-full max-w-md">
      <h2 className="text-xl font-bold mb-2 text-indigo-700">{courseName}</h2>

      <p className="text-gray-700 mb-3">{description}</p>

      <div className="mb-2">
        <span className="font-semibold">Fees:</span> ₹{fees}
      </div>

      <div className="mb-4">
        <span className="font-semibold">Mode:</span> {mode}
      </div>

      <button
        onClick={onEnroll}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;
