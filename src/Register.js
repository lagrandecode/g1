import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import TrafficBackground from "./assets/drawkit-transport-scene-3.svg"; // Ensure correct path

const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Logic for registration (e.g., API call) can go here
    navigate("/quiz"); // Navigate to Quiz page after registration
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
            Create Your Account
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Sign up to access the G1 practice test and track your progress.
          </p>

          {/* Registration Form */}
          <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>
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
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-500 hover:to-red-600 shadow-md w-full"
            >
              Register
            </button>
          </form>

          {/* Navigation to Login */}
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-500 hover:underline dark:text-indigo-300">
              Log in here
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

export default Register;
