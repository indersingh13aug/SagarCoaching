import React from 'react';
import offers from '../data/offers';

const Offers = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Current Offers</h1>

      {offers.length === 0 ? (
        <p className="text-gray-600">No offers available at the moment.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white border border-indigo-200 rounded-lg shadow p-6"
            >
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">{offer.title}</h2>
              <p className="text-gray-700 mb-2">{offer.description}</p>
              <p className="text-sm text-gray-500">
                <strong>Valid Until:</strong> {offer.expiryDate}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Offers;
