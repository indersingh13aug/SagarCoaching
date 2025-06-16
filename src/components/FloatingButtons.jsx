import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed right-4 bottom-24 flex flex-col gap-4 z-50">

      {/* WhatsApp */}
      <div className="group flex items-center justify-end relative">
        <a
          href="https://wa.me/919452777207"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row-reverse items-center bg-green-600 text-white rounded-full w-fit pl-3 pr-3 py-2 shadow-lg"
        >
          <FaWhatsapp className="text-xl" />
          {/* Hidden on small screens, expand only on hover-supported devices */}
          <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-[100px] group-hover:ml-2 transition-all duration-300 whitespace-nowrap">
            WhatsApp &nbsp;
          </span>
        </a>
      </div>

      {/* Call */}
      <div className="group flex items-center justify-end relative">
        <a
          href="tel:+919452777207"
          className="flex flex-row-reverse items-center bg-blue-600 text-white rounded-full w-fit pl-3 pr-3 py-2 shadow-lg"
        >
          <FaPhone className="text-xl" />
          <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-[80px] group-hover:ml-2 transition-all duration-300 whitespace-nowrap">
            Call Us &nbsp;
          </span>
        </a>
      </div>

    </div>
  );
};

export default FloatingButtons;
