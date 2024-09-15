import React, { useState } from 'react';

import axios from 'axios';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      // Replace with your signup API endpoint
      await axios.post('/api/signup', { email, password });
      history.push('/login'); // Redirect to login page after successful signup
    } catch (err) {
      setError('Error creating account');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>
            Already have an account?{' '}
            <a href="/login" className="text-blue-400 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
