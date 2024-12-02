import React from "react";
import { Link } from "react-router-dom";
import TrafficBackground from "./assets/drawkit-transport-scene-3.svg"; // Ensure correct path

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Content Section */}
      <div className="flex-1 flex" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {/* Text Section */}
        <div className="w-1/2 flex flex-col justify-center items-center text-center px-6 bg-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            The practice test program that will help you ace your Ontario G1
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            This is a group project developed by Humber College Student 2024.
          </p>

          <div className="space-y-4">
            <Link
              to="/quiz"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-500 hover:to-red-600 shadow-md"
            >
              Start free G1 practice test
            </Link>
          </div>
        </div>

        {/* Background Image Section */}
        <div
          className="w-1/2"
          style={{
            backgroundImage: `url(${TrafficBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100 text-gray-600">
        &copy; 2024 Humber College Student. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
