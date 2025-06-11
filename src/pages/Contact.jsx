import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send data to backend or API
    alert('Message submitted! Thank you.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Bright Future Institute</h2>
          <p className="text-gray-700 mb-2">123 Education Lane, Amethi, Uttar Pradesh</p>
          <p className="text-gray-700 mb-2">Phone: +91-9876543210</p>
          <p className="text-gray-700 mb-2">Email: info@brightfutureinstitute.in</p>
          <p className="text-gray-700">Timings: Mon - Sat | 9:00 AM - 6:00 PM</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Your Name</label>
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
            <label className="block text-gray-700 font-medium">Your Email</label>
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
            <label className="block text-gray-700 font-medium">Your Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded mt-1"
              rows="4"
              placeholder="Type your message here..."
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
