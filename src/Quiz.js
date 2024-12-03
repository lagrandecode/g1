import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [results, setResults] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    axios
      .get("http://10.0.0.63:8000/")
      .then((response) => {
        setQuizzes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the quiz:", error);
      });
  }, []);

  const handleAnswer = (quizId, answer) => {
    setUserAnswers({ ...userAnswers, [quizId]: answer });
    const isCorrect = quizzes[currentQuestionIndex].answer === answer;
    setResults({ ...results, [quizId]: isCorrect });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < quizzes.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const correctAnswersCount = Object.values(results).filter(Boolean).length;
  const wrongAnswersCount = Object.values(results).length - correctAnswersCount;

  if (showResults) {
    return (
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Quiz Completed!
        </h1>
        <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
          Correct Answers: {correctAnswersCount}
        </p>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
          Wrong Answers: {wrongAnswersCount}
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-2xl p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Quiz</h1>
          <Link
            to="/"
            className="text-blue-500 underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-400"
          >
            Back to Home
          </Link>
        </div>

        {quizzes.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300">Loading questions...</p>
        ) : (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
              {quizzes[currentQuestionIndex].question}
            </h2>
            {quizzes[currentQuestionIndex].images && (
              <img
                src={`http://10.0.0.63:8000${quizzes[currentQuestionIndex].images}`}
                alt="Quiz"
                className="mb-4 w-full h-auto rounded-lg"
              />
            )}
            <ul className="space-y-2">
              {quizzes[currentQuestionIndex].option.map((option, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="radio"
                    name={`quiz-${quizzes[currentQuestionIndex].id}`}
                    value={option}
                    id={`option-${index}`}
                    onChange={() =>
                      handleAnswer(quizzes[currentQuestionIndex].id, option)
                    }
                    checked={
                      userAnswers[quizzes[currentQuestionIndex].id] === option
                    }
                    className="mr-2"
                  />
                  <label htmlFor={`option-${index}`} className="text-gray-900 dark:text-white">
                    {option}
                  </label>
                </li>
              ))}
            </ul>
            {results[quizzes[currentQuestionIndex].id] !== undefined && (
              <p
                className={`mt-4 font-bold ${
                  results[quizzes[currentQuestionIndex].id]
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {results[quizzes[currentQuestionIndex].id]
                  ? "Correct!"
                  : "Wrong Answer"}
              </p>
            )}
            <button
              onClick={nextQuestion}
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              disabled={
                results[quizzes[currentQuestionIndex].id] === undefined
              }
            >
              {currentQuestionIndex + 1 === quizzes.length
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
