import React from 'react'

const InsuranceCard = () => {
  return (
    <div className="w-[420px] bg-amber-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl font-serif">
    <div className="p-8">
      <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">SafeGuard Insurance</div>
      <p className="block mt-4 text-lg leading-tight font-medium text-black">
        Protecting what matters most, since 1985
      </p>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <span className="text-gray-500 mr-2">📞</span>
          <p className="text-gray-600">24/7 Customer Support</p>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-500 mr-2">👥</span>
          <p className="text-gray-600">Over 1 million satisfied customers</p>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-500 mr-2">🏢</span>
          <p className="text-gray-600">Offices in 50 states</p>
        </div>
      </div>
      <p className="mt-6 text-gray-500">
        SafeGuard Insurance offers comprehensive coverage for auto, home, life, and business. Our expert agents are
        dedicated to finding the perfect policy for your needs.
      </p>
      <div className="mt-6">
        <button className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 transition duration-300">
          Know more
        </button>
      </div>
    </div>
  </div>
  )
}

export default InsuranceCard