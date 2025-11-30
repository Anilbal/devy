import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Registration attempted with:", { 
      firstName, 
      email, 
      password 
    });
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg border border-gray-300 p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Create an account
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          Enter your information below to create your account
        </p>

        <form onSubmit={handleRegister}>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="m@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors mb-3"
          >
            Create account
          </button>
        </form>

        <button
          onClick={handleGoogleSignup}
          className="w-full bg-white text-gray-900 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors mb-4"
        >
          Sign up with Google
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-gray-900 underline hover:no-underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;