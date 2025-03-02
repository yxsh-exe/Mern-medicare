import React from 'react';
import { Shield, Phone, Users, Building2, Mail } from 'lucide-react';

const InsuranceCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl border border-blue-100">
      <div className="h-2 bg-gradient-to-r from-blue-500 to-teal-400"></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Shield className="text-blue-600 mr-2" size={24} />
          <h2 className="text-xl font-bold text-gray-800 tracking-wide">MediCare Plus</h2>
        </div>
        
        <p className="text-gray-600 text-sm border-b border-gray-200 pb-3">
          Premium healthcare coverage since 1985
        </p>
        
        <div className="mt-4 space-y-3">
          <div className="flex items-center">
            <Phone className="text-blue-500 mr-3" size={16} />
            <p className="text-gray-800 text-sm">24/7 Medical Support Hotline</p>
          </div>
          <div className="flex items-center">
            <Users className="text-blue-500 mr-3" size={16} />
            <p className="text-gray-800 text-sm">Network of 10,000+ Specialists</p>
          </div>
          <div className="flex items-center">
            <Building2 className="text-blue-500 mr-3" size={16} />
            <p className="text-gray-800 text-sm">Affiliated with Top Hospitals</p>
          </div>
        </div>
        
        <p className="mt-4 text-gray-700 text-sm">
          MediCare Plus offers comprehensive healthcare coverage including preventive care, 
          specialist visits, hospitalization, and prescription medication. Our dedicated case 
          managers ensure you receive the highest quality of care.
        </p>
        
        <div className="mt-4 flex space-x-2">
          <button className="flex-1 bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-500 transition duration-300 flex items-center justify-center">
            <span>Learn More</span>
          </button>
          <button className="flex-1 border border-blue-600 text-blue-600 font-medium py-2 px-4 rounded hover:bg-blue-50 transition duration-300 flex items-center justify-center">
            <Mail className="mr-1" size={16} />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;