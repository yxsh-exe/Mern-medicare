import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useHospitalAuthContext } from '../hooks/useHospitalAuthContext';
import toast from 'react-hot-toast';
import { FaEnvelope, FaLock, FaHospitalAlt } from 'react-icons/fa';

function HospitalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useHospitalAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      toast.error('Please fill in all fields without leading or trailing spaces.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/hospital/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();
      
      if (response.ok) {
        toast.success('Hospital login successful! Welcome to the portal.');
        localStorage.setItem("hospital", JSON.stringify(json));
        dispatch({type: 'LOGIN', payload: json});
        setEmail('');
        setPassword('');
        navigate('/');
      } else {
        toast.error(json.msg || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      toast.error('Connection error. Please check your internet and try again.');
    }
  };

  return (
    <div className="flex justify-center items-center bg-blue-50" style={{ height: "calc(100vh - 60px)" }}>
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border-t-4 border-blue-600">
        <div className="flex items-center justify-center mb-6">
          <FaHospitalAlt className="w-8 h-8 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Hospital Portal</h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label htmlFor="email" className="flex items-center text-gray-700 mb-2 font-medium">
              <FaEnvelope className="mr-2 text-blue-500" />
              Hospital Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hospital@example.com"
              required
            />
          </div>
          
          <div className="mb-6 relative">
            <label htmlFor="password" className="flex items-center text-gray-700 mb-2 font-medium">
              <FaLock className="mr-2 text-blue-500" />
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter hospital password"
              required
            />
            <p className="text-xs text-right text-blue-600 mt-2 cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 flex items-center justify-center"
          >
            Hospital Login
          </button>
          
          <div className="mt-4 text-center border-t pt-4">
            <p className="text-sm text-gray-600 mb-2">
              This page is for hospital usage only
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/login" 
                className="text-sm text-blue-600 font-medium hover:underline"
              >
                Patient Login
              </Link>
              <Link 
                to="/admin" 
                className="text-sm text-blue-600 font-medium hover:underline"
              >
                Admin Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HospitalLogin;