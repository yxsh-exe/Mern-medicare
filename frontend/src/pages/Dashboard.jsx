import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuthContext } from '../hooks/useAdminAuthContext';
import { Building2, PlusCircle, BarChart2, Users, Settings, LogOut } from 'lucide-react';

function Dashboard() {
  const { dispatch } = useAdminAuthContext();
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/registerhospital');
  };

  const handleHospitals = () => {
    navigate("/allhospitals");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("admin");
    dispatch({ type: 'LOGOUT', payload: '' });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Medicare Administration Portal</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-white text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors duration-200"
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-700">Welcome to the Medicare Management System</h2>
          <p className="mt-1 text-sm text-gray-500">Manage hospitals and healthcare facilities from a central dashboard.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500 truncate">Total Hospitals</p>
                  <p className="text-xl font-semibold text-gray-900">24</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500 truncate">Active Staff</p>
                  <p className="text-xl font-semibold text-gray-900">1,284</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                  <BarChart2 className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500 truncate">Monthly Reports</p>
                  <p className="text-xl font-semibold text-gray-900">18</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Actions */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Actions</h3>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div 
                onClick={handleHospitals} 
                className="cursor-pointer group relative border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-all duration-200"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Building2 className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">View All Hospitals</h4>
                    <p className="mt-1 text-sm text-gray-500">Access and manage all registered healthcare facilities</p>
                  </div>
                </div>
              </div>

              <div 
                onClick={handleRegister} 
                className="cursor-pointer group relative border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-all duration-200"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <PlusCircle className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">Register New Hospital</h4>
                    <p className="mt-1 text-sm text-gray-500">Add a new healthcare facility to the system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional features */}
        <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">System Management</h3>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="cursor-pointer group relative border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-all duration-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Settings className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium text-gray-900">System Settings</h4>
                  </div>
                </div>
              </div>

              <div className="cursor-pointer group relative border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-all duration-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium text-gray-900">User Management</h4>
                  </div>
                </div>
              </div>

              <div className="cursor-pointer group relative border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-all duration-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BarChart2 className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium text-gray-900">Analytics</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;