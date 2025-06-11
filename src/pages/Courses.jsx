import React from 'react';
import courses from '../data/courses';

const Courses = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Our Courses</h1>

      {courses.length === 0 ? (
        <p className="text-gray-600">No courses available currently.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-indigo-200 rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">{course.name}</h2>
              <p className="text-gray-700 mb-3">{course.description}</p>
              <p className="text-gray-800">
                <strong>Fees:</strong> ₹{course.fees}
              </p>
              <p className="text-gray-800">
                <strong>Mode:</strong> {course.mode}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
