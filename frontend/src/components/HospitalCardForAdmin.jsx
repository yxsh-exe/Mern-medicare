import React from 'react';
import toast from 'react-hot-toast';
import { Trash2, MapPin, Mail, Building, Phone } from 'lucide-react';

function HospitalCardForAdmin({ hospital, onDelete }) {
  const handleDelete = async (e) => {
    e.preventDefault();
    
    // Confirmation dialog before deletion
    if (!window.confirm(`Are you sure you want to remove ${hospital.name}?`)) {
      return;
    }

    const admin = JSON.parse(localStorage.getItem('admin'));
    const token = admin?.token;

    try {
      const response = await fetch(`http://localhost:3000/api/admin/deletehospital/${hospital._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const json = await response.json();

      if (response.ok) {
        toast.success(`${hospital.name} has been removed successfully`);
        onDelete(hospital._id);
      } else {
        if (admin) {
          toast.error(json.message);
        } else {
          toast.error("Authentication required. Please login again.");
        }
      }
    } catch (error) {
      console.error("Error removing hospital:", error);
      toast.error("An error occurred while processing your request.");
    }
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ml-5 mt-4">
      {/* Hospital card header with color bar */}
      <div className="h-2 bg-blue-600 w-full"></div>
      
      {/* Hospital logo area - placeholder */}
      <div className="flex justify-center pt-6">
        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
          <Building className="h-8 w-8 text-blue-600" />
        </div>
      </div>
      
      {/* Hospital info */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">{hospital.name}</h1>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-blue-500" />
            <span className="font-medium">{hospital.city}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Mail className="h-4 w-4 mr-2 text-blue-500" />
            <span className="font-medium">{hospital.email}</span>
          </div>
          
          {hospital.phone && (
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2 text-blue-500" />
              <span className="font-medium">{hospital.phone}</span>
            </div>
          )}
        </div>
        
        {/* Delete button */}
        <button
          onClick={handleDelete}
          className="w-full flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-600 font-medium py-3 rounded-lg transition duration-300 ease-in-out group"
          aria-label="Remove Hospital"
        >
          <Trash2 className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
          Remove Hospital
        </button>
      </div>
    </div>
  );
}

export default HospitalCardForAdmin;