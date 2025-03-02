import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import toast from 'react-hot-toast';
import { FaUser, FaLock, FaEnvelope, FaUserCircle, FaUserPlus } from 'react-icons/fa';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedUsername = username.trim();

    if (!trimmedEmail || !trimmedPassword || !trimmedUsername) {
      toast.error('Please fill in all fields without leading or trailing spaces.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username, 
          email, 
          password
        }),
      });

      const json = await response.json();
      
      if (response.ok) {
        toast.success('Registration successful! Welcome to our user portal.');
        localStorage.setItem("user", JSON.stringify(json));
        dispatch({type: 'LOGIN', payload: json});
        setEmail('');
        setPassword('');
        setUsername('');
        navigate('/');
      } else {
        toast.error(json.msg || 'Registration failed. Please try again.');
      }
    } catch (error) {
      toast.error('Connection error. Please check your internet and try again.');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center bg-blue-50" style={{ height: "calc(100vh - 60px)" }}>
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border-t-4 border-blue-600">
        <div className="flex items-center justify-center mb-6">
          <FaUserCircle className="w-8 h-8 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">User Portal</h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label htmlFor="username" className="flex items-center text-gray-700 mb-2 font-medium">
              <FaUser className="mr-2 text-blue-500" />
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="johndoe"
              required
            />
          </div>
          
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
              placeholder="your.email@example.com"
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
              placeholder="Choose a secure password"
              required
            />
            <p className="text-xs text-gray-500 mt-2">
              Must be at least 8 characters long with a mix of letters, numbers, and symbols.
            </p>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 flex items-center justify-center"
          >
            <FaUserPlus className="mr-2" />
            Create Account
          </button>
          
          <div className="mt-4 text-center border-t pt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <span
                onClick={handleLogin}
                className="text-blue-600 font-medium cursor-pointer hover:underline"
              >
                Sign in
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;