import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import Register from "./Register"; // Import the Register component
import Login  from "./Login";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""} bg-white dark:bg-gray-900 min-h-screen`}>
      <Router>
        {/* Theme Toggle Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleTheme}
            className="bg-blue-500 dark:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-indigo-500"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
