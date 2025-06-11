import React from 'react';

const TeacherCard = ({ name, subject, experience }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm mx-auto hover:shadow-lg transition-all">
      {/* Initial avatar circle */}
      <div className="flex items-center mb-4">
        <div className="bg-indigo-600 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
          {name?.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{subject}</p>
        </div>
      </div>

      {/* Experience */}
      <p className="text-gray-700">
        <span className="font-semibold">Experience:</span> {experience} years
      </p>
    </div>
  );
};

export default TeacherCard;
