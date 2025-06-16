import React, { useState } from 'react';
import Swal from 'sweetalert2';
const generateCaptcha = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    captchaInput: '',
  });

  const [captcha, setCaptcha] = useState(generateCaptcha());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRefresh = () => {
    setCaptcha(generateCaptcha());
    setFormData({ ...formData, captchaInput: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captchaInput !== captcha) {
      alert('Captcha is incorrect!');
      return;
    }
      // Show alert
      Swal.fire({
        title: 'Thank You!',
        text: 'Your enquiry has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4f46e5',
      });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">Enquiry Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          >
            <option value="">Select Course</option>
            <option value="NEET">NEET</option>
            <option value="JEE">JEE</option>
            <option value="UPSC">UPSC</option>
          </select>

          <div className="flex items-center gap-2">
            <div className="bg-gray-100 px-4 py-2 text-lg font-bold rounded border border-gray-300">
              {captcha}
            </div>
            <button
              type="button"
              onClick={handleRefresh}
              className="text-indigo-600 hover:text-indigo-800 text-sm"
            >
              🔄 Refresh
            </button>
          </div>
          <input
            type="text"
            name="captchaInput"
            placeholder="Enter text as shown"
            value={formData.captchaInput}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
