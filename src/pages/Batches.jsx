import React from 'react';
import batches from '../data/batches';

const Batches = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Upcoming Batches</h1>

      {batches.length === 0 ? (
        <p className="text-gray-600">No batches available at the moment.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {batches.map((batch) => (
            <div
              key={batch.id}
              className="border border-indigo-200 rounded-lg shadow p-6 bg-white"
            >
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">{batch.course}</h2>
              <p className="text-gray-700">Start Date: <strong>{batch.startDate}</strong></p>
              <p className="text-gray-700">Mode: <strong>{batch.mode}</strong></p>
              <p className="text-gray-600 mt-2 text-sm">Batch ID: {batch.id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Batches;
