import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_MUTATION } from "./authMutations";

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: {
      mobileNumber,
      password,
    },
    onCompleted: (data) => {
      // Save the token to localStorage or manage the auth state
      localStorage.setItem("token", data.login.token);
      const expiryDateTime = new Date(data.login.expiry).getTime();
      const expiresIn = expiryDateTime - Date.now(); // Calculate remaining time until expiration

      localStorage.setItem("tokenExpiryDateTime", expiryDateTime);

      // Schedule a logout or refresh before the token expires
      setTimeout(() => {
        // Implement logout or token refresh logic here
        console.log("Token expired. Logging out...");
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiryDateTime");
        window.location = "/login";
      }, expiresIn);
      navigate("/players"); // Navigate to Players Page on successful login
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

  const tokenExpiryDateTime = localStorage.getItem("tokenExpiryDateTime");
  const expiresIn = tokenExpiryDateTime - Date.now();
  if (localStorage.getItem("token") && expiresIn > 0) navigate("/players");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNumber"
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              aria-label="Mobile Number"
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            {
              loading && (
                <div className="loader">Loading...</div>
              ) /* Consider using a spinner here */
            }
          </div>
          {error && (
            <p className="text-red-500 text-xs italic">
              Error :( Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
