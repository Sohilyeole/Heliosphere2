import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
//   const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your login API endpoint
      await axios.post('/api/login', { email, password });
      history.push('/'); // Redirect to home page after successful login
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
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
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-400 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
