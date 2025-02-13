import React from 'react'

const InsuranceCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-r from-white to-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">SafeGuard Insurance</h2>
        <p className="mt-2 text-gray-600 text-sm">
          Protecting what matters most, since 1985
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-2">📞</span>
            <p className="text-gray-800 text-sm">24/7 Customer Support</p>
          </div>
          <div className="flex items-center">
            <span className="text-purple-500 mr-2">👥</span>
            <p className="text-gray-800 text-sm">Over 1 million satisfied customers</p>
          </div>
          <div className="flex items-center">
            <span className="text-red-500 mr-2">🏢</span>
            <p className="text-gray-800 text-sm">Offices in 50 states</p>
          </div>
        </div>
        <p className="mt-3 text-gray-700 text-xs">
          SafeGuard Insurance offers comprehensive coverage for auto, home, life, and business. Our expert agents are dedicated to finding the perfect policy for your needs.
        </p>
        <div className="mt-4">
          <button className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-500 transition duration-300 transform hover:scale-105">
            Know more
          </button>
        </div>
      </div>
    </div>
  )
}

export default InsuranceCard