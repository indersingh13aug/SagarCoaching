import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Registration = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const selectedBatch = {
    course: params.get('course') || '',
    mode: params.get('mode') || 'Online',
    description: params.get('description') || '',
    startDate: params.get('startDate') || '',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally send to backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Registration Successful!</h2>
        <p className="text-lg text-gray-700">
          Thank you for registering for <strong>{selectedBatch.course}</strong> batch.
          <br /> We’ll contact you soon via email or phone.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Student Registration</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Selected Batch Details */}
        <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">Selected Batch Details:</h2>
          <p className="mb-2"><strong>Course:</strong> {selectedBatch.course}</p>
          <p className="mb-2"><strong>Start Date:</strong> {selectedBatch.startDate}</p>
          <p className="mb-2"><strong>Mode:</strong> {selectedBatch.mode}</p>
          <p className="mb-2"><strong>Description:</strong> {selectedBatch.description}</p>
        </div>

        {/* Right: Registration Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4 border border-indigo-200"
        >
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded mt-1"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded mt-1"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded mt-1"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Selected Course</label>
            <input
              type="text"
              value={selectedBatch.course}
              disabled
              className="w-full border border-gray-300 p-2 rounded mt-1 bg-gray-100 text-gray-700 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Mode</label>
            <input
              type="text"
              value={selectedBatch.mode}
              disabled
              className="w-full border border-gray-300 p-2 rounded mt-1 bg-gray-100 text-gray-700 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
