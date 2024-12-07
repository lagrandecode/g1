import React from "react";
import { useNavigate } from "react-router-dom";
import TrafficBackground from "./assets/drawkit-transport-scene-3.svg"; // Ensure the path is correct

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for authentication (e.g., API call)
    navigate("/quiz"); // Navigate to the quiz page after successful login
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Content Section */}
      <div className="flex-1 flex" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {/* Form Section */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-gray-800 animate-fly-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Welcome Back!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Log in to continue your G1 practice test and track your progress.
          </p>

          {/* Login Form */}
          <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-500 hover:to-green-600 shadow-md w-full"
            >
              Log In
            </button>
          </form>

          {/* Navigation to Registration */}
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-500 hover:underline dark:text-indigo-300">
              Sign up here
            </a>
          </p>
        </div>

        {/* Background Image Section */}
        <div
          className="w-full md:w-1/2 animate-fly-right"
          style={{
            backgroundImage: `url(${TrafficBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
        &copy; 2024 Humber College Student. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
