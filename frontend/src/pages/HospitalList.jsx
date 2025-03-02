import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Plus, Search, ArrowLeft, Loader2 } from 'lucide-react';
import HospitalCardForAdmin from '../components/HospitalCardForAdmin';
import toast from 'react-hot-toast';

function HospitalList() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/api/hospital", {
          headers: {
            "Content-Type": "application/json"
          }
        });
        
        const json = await response.json();
        
        if (response.ok) {
          setHospitals(json);
          setError(null);
        } else {
          setError('Failed to fetch hospitals');
          toast.error('Failed to load hospitals');
        }
      } catch (err) {
        setError('Network error while fetching hospitals');
        toast.error('Network error. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchHospitals();
  }, []);

  const handleDeleteHospital = (hospitalId) => {
    setHospitals(hospitals.filter(hospital => hospital._id !== hospitalId));
    toast.success('Hospital successfully removed');
  };

  const handleAddHospital = () => {
    navigate('/registerhospital');
  };

  const handleGoBack = () => {
    navigate('/dashboard');
  };

  const filteredHospitals = hospitals.filter(hospital => 
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={handleGoBack}
                className="mr-4 text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-900">Hospital Management</h1>
            </div>
            <button
              onClick={handleAddHospital}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Hospital
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-6">
          <div className="relative rounded-md shadow-sm max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 py-2 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search by name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Hospitals List */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
            <p className="mt-4 text-gray-500">Loading hospitals...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        ) : filteredHospitals.length > 0 ? (
          <>
            <p className="text-sm text-gray-500 mb-4">Showing {filteredHospitals.length} of {hospitals.length} hospitals</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHospitals.map((hospital) => (
                <HospitalCardForAdmin 
                  key={hospital._id} 
                  hospital={hospital} 
                  onDelete={handleDeleteHospital} 
                />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-12 text-center sm:px-6">
              <Building2 className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No hospitals found</h3>
              {searchTerm ? (
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search term or clear the filter.
                </p>
              ) : (
                <p className="mt-1 text-sm text-gray-500">
                  Get started by adding a new hospital to the system.
                </p>
              )}
              <div className="mt-6">
                <button
                  onClick={handleAddHospital}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Hospital
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default HospitalList;