import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import { LOGIN_MUTATION } from './authMutations';

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook
  
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: {
      mobileNumber,
      password,
    },
    onCompleted: (data) => {
      // Save the token to localStorage or manage the auth state
      debugger;
      localStorage.setItem('token', data.login.token);
      const expiryDateTime  = new Date(data.login.expiry).getTime();
        const expiresIn = (expiryDateTime - Date.now()); // Calculate remaining time until expiration

  // Schedule a logout or refresh before the token expires
  setTimeout(() => {
    // Implement logout or token refresh logic here
    debugger;
    console.log('Token expired. Logging out...');
    localStorage.removeItem('token');
    window.location = '/login';
  }, expiresIn);
  navigate('/players'); // Navigate to Players Page on successful login
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login();
    } catch (err) {
      // Handle error
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error :( Please try again</p>}
      </form>
    </div>
  );
};

export default LoginPage;
