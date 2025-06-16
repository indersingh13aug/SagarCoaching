import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted! Thank you.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Contact Info + Form */}
        <div>
          {/* Contact Info */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Bright Future Institute</h2>
            <p className="text-gray-700 mb-1">123 Education Lane, Amethi, Uttar Pradesh</p>
            <p className="text-gray-700 mb-1">📞 +91-9876543210</p>
            <p className="text-gray-700 mb-1">✉️ info@brightfutureinstitute.in</p>
            <p className="text-gray-700">🕘 Mon - Sat | 9:00 AM - 6:00 PM</p>
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

        {/* Right: Embedded Google Map */}
        <div className="w-full h-full rounded overflow-hidden shadow-lg min-h-[500px]">
          <iframe
            title="Bright Future Institute Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14274.659378792184!2d81.8003825!3d26.1558291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a054dbe1fbb17%3A0x53563d0c98f72515!2sAmethi%2C%20Uttar%20Pradesh%20227501!5e0!3m2!1sen!2sin!4v1718126612345!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
