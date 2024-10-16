import questionsData from "../../data/questionsData"; // Import the questions data
import React, { useState, useEffect } from "react";

// Utility function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function QuestionsPage() {
  const [questions, setQuestions] = useState([]); // Shuffled questions state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question
  const [score, setScore] = useState(0); // Track the score
  const [showScore, setShowScore] = useState(false); // Show score at the end
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false); // Track if the answer is confirmed

  // Shuffle questions and answers when the component first renders
  useEffect(() => {
    const shuffledQuestions = questionsData.map((question) => ({
      ...question,
      answers: shuffleArray([...question.answers]), // Shuffle the answers for each question
    }));
    setQuestions(shuffleArray(shuffledQuestions)); // Shuffle the questions
  }, []);

  const currentQuestion = questions[currentQuestionIndex]; // Get the current question

  // Handle answer selection
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  // Handle answer confirmation
  const handleConfirmAnswer = () => {
    setIsAnswerConfirmed(true);

    // Check if the selected answer is correct
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Move to the next question
  const handleNextQuestion = () => {
    setSelectedAnswer(null); // Reset selected answer
    setIsAnswerConfirmed(false); // Reset answer confirmation

    // If it's the last question, show the score
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowScore(true); // Show the final score
    }
  };

  // Restart the quiz
  const handleRestart = () => {
    const shuffledQuestions = questionsData.map((question) => ({
      ...question,
      answers: shuffleArray([...question.answers]), // Shuffle the answers for each question
    }));
    setQuestions(shuffleArray(shuffledQuestions)); // Shuffle the questions
    setCurrentQuestionIndex(0); // Reset to the first question
    setScore(0); // Reset the score
    setShowScore(false); // Hide the score
    setSelectedAnswer(null); // Reset the selected answer
    setIsAnswerConfirmed(false); // Reset confirmation state
  };

  return (
    <div>
      <h1>Quiz</h1>

      {/* If all questions are answered, show the score */}
      {showScore ? (
        <div>
          <h2>
            Your Score: {score}/{questions.length}
          </h2>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        currentQuestion && (
          <div>
            {/* Show the question count */}
            <h3>
              Question {currentQuestionIndex + 1}/{questions.length}
            </h3>

            <h2>{currentQuestion.question}</h2>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              {currentQuestion.answers.map((answer, i) => (
                <li
                  key={i}
                  onClick={() => handleAnswerClick(answer)}
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      isAnswerConfirmed &&
                      answer === currentQuestion.correctAnswer
                        ? "green" // Highlight correct answer in green
                        : selectedAnswer === answer
                        ? isAnswerConfirmed
                          ? answer === currentQuestion.correctAnswer
                            ? "green" // Correct answer
                            : "red" // Incorrect answer
                          : "lightgray" // Selected but not confirmed
                        : "transparent", // Unselected answers
                    padding: "0.5rem",
                    marginBottom: "0.5rem",
                    borderRadius: "5px",
                    pointerEvents: isAnswerConfirmed ? "none" : "auto", // Disable interaction after confirmation
                  }}
                >
                  {/* Label answers with A, B, C, D */}
                  {String.fromCharCode(65 + i)}. {answer}
                </li>
              ))}
            </ul>

            {/* Show Confirm button when an answer is selected and not confirmed */}
            {!isAnswerConfirmed && selectedAnswer && (
              <button onClick={handleConfirmAnswer}>Confirm Answer</button>
            )}

            {/* Show Next Question button after confirmation */}
            {isAnswerConfirmed && (
              <button onClick={handleNextQuestion}>Next Question</button>
            )}
          </div>
        )
      )}
    </div>
  );
}

export default QuestionsPage;
