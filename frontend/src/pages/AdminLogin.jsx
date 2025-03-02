import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAdminAuthContext } from '../hooks/useAdminAuthContext';
import { FaUserCircle, FaEnvelope, FaLock } from 'react-icons/fa';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useAdminAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    console.log(json.token);
    localStorage.setItem('token',json.token);
    if (response.ok) {
      toast.success('Successfully logged in!');
      localStorage.setItem('admin', JSON.stringify(json));
      localStorage.setItem('token', json.token);
      dispatch({ type: 'LOGIN', payload: json });
      setEmail('');
      setPassword('');
      navigate('/dashboard');
    } else {
      toast.error(json.msg);
    }
  };

  return (
    <div className="flex justify-center items-center bg-blue-50" style={{ height: 'calc(100vh - 60px)' }}>
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border-t-4 border-blue-600">
        <div className="flex items-center justify-center mb-6">
          <FaUserCircle className="w-8 h-8 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Admin Login</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label htmlFor="email" className="flex items-center text-gray-700 mb-2 font-medium">
              <FaEnvelope className="mr-2 text-blue-500" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
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
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 flex items-center justify-center"
          >
            Login
          </button>

          <p className="text-sm mt-4 text-center">This page is for Admin usage only</p>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;