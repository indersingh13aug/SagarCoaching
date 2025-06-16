import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import batches from '../data/batches';

const Batches = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const selectedCourse = queryParams.get('course');

  const filteredBatches = selectedCourse
    ? batches.filter(batch => batch.course.toLowerCase() === selectedCourse.toLowerCase())
    : batches;

  const handleRegister = (batch) => {
    const query = new URLSearchParams({
      course: batch.course,
      mode: batch.mode,
      description: batch.description,
      startDate: batch.startDate,
    }).toString();
    navigate(`/register?${query}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        {selectedCourse ? `${selectedCourse} Batches` : 'Upcoming Batches'}
      </h1>

      {/* Show All Batches Button */}
      {selectedCourse && (
        <div className="mb-6">
          <button
            onClick={() => navigate('/batches')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm px-4 py-2 rounded"
          >
            Show All Batches
          </button>
        </div>
      )}

      {/* If No Batches Found */}
      {filteredBatches.length === 0 ? (
        <p className="text-gray-600">
          No batches found for <strong>{selectedCourse}</strong>.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBatches.map((batch) => (
            <div
              key={batch.id}
              className="border border-indigo-200 rounded-lg shadow p-6 bg-white flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-indigo-600 mb-2">{batch.course}</h2>
                <p className="text-gray-700 mb-1"><strong>Description:</strong> {batch.description}</p>
                <p className="text-gray-700 mb-1">Start Date: <strong>{batch.startDate}</strong></p>
                <p className="text-gray-700 mb-2">Mode: <strong>{batch.mode}</strong></p>
                <p className="text-gray-500 text-sm">Batch ID: {batch.id}</p>
              </div>
              <button
                onClick={() => handleRegister(batch)}
                className="mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
              >
                Register
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Batches;
