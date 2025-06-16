import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserRole, isLoggedIn, removeAuthToken } from '../utils/auth';
import { Menu, X } from 'lucide-react'; // You need lucide-react installed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const role = getUserRole();

  const handleLogout = () => {
    removeAuthToken();
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Bright <span className="text-orange-500">Future</span> Institute
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-blue-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden sm:flex gap-6 items-center text-gray-700 font-medium text-[16px]">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/courses" className="hover:text-blue-600">Courses</Link>
          
          <Link to="/batches" className="hover:text-blue-600">Batches</Link>
          {/* <Link to="/offers" className="hover:text-blue-600">Offers</Link> */}
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>

          {role === 'admin' && (
            <Link to="/admin" className="text-yellow-600 font-semibold underline hover:text-yellow-700">
              Admin
            </Link>
          )}

          {!isLoggedIn() ? (
            <Link to="/login" className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">
              Login
            </Link>
          ) : (
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600">
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-start px-6 pb-4 gap-3 text-gray-700 font-medium text-[16px]">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/courses" onClick={toggleMenu}>Courses</Link>
          
          <Link to="/batches" onClick={toggleMenu}>Batches</Link>
          <Link to="/offers" onClick={toggleMenu}>Offers</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>

          {role === 'admin' && (
            <Link to="/admin" onClick={toggleMenu} className="text-yellow-600 font-semibold underline">
              Admin
            </Link>
          )}

          {!isLoggedIn() ? (
            <Link to="/login" onClick={toggleMenu} className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">
              Login
            </Link>
          ) : (
            <button onClick={() => { handleLogout(); toggleMenu(); }} className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
