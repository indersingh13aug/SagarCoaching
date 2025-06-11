import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Admin Dashboard</h1>

      <p className="text-gray-700 mb-6">
        Welcome to the admin panel. Use the tools below to manage courses, batches, teachers, and offers for your coaching institute.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Add Course */}
        <Link to="/admin/add-course">
          <div className="bg-white shadow hover:shadow-lg transition p-6 rounded-lg border border-indigo-200 text-center">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Add Course</h2>
            <p className="text-gray-600">Create new NEET, JEE, or UPSC courses with fees and details.</p>
          </div>
        </Link>

        {/* Add Batch */}
        <Link to="/admin/add-batch">
          <div className="bg-white shadow hover:shadow-lg transition p-6 rounded-lg border border-indigo-200 text-center">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Add Batch</h2>
            <p className="text-gray-600">Add batch info like course, timings, and start date.</p>
          </div>
        </Link>

        {/* Add Teacher */}
        <Link to="/admin/add-teacher">
          <div className="bg-white shadow hover:shadow-lg transition p-6 rounded-lg border border-indigo-200 text-center">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Add Teacher</h2>
            <p className="text-gray-600">Add faculty with subject, course, and experience.</p>
          </div>
        </Link>

        {/* Add Offer */}
        <Link to="/admin/add-offer">
          <div className="bg-white shadow hover:shadow-lg transition p-6 rounded-lg border border-indigo-200 text-center">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Add Offer</h2>
            <p className="text-gray-600">Create promotional offers and discounts for students.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
