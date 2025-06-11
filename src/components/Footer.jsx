import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        {/* Institute Info */}
        <div>
          <h2 className="text-xl font-bold">Bright Future Institute</h2>
          <p className="text-gray-400 text-sm mt-1">
            Empowering students for NEET, JEE & UPSC success.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold mb-1">Quick Links</h3>
          <a href="/" className="text-gray-400 hover:text-white">Home</a>
          <a href="/courses" className="text-gray-400 hover:text-white">Courses</a>
          <a href="/about" className="text-gray-400 hover:text-white">About</a>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400 text-sm">📞 +91-9876543210</p>
          <p className="text-gray-400 text-sm">📧 info@brightfuture.com</p>

          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-white hover:text-blue-500 text-lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-white hover:text-pink-500 text-lg" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="text-white hover:text-red-600 text-lg" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Bright Future Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
