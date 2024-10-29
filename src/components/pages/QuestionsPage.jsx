// import myQuestionsData from "../../data/myQuestionsData"; // Import the questions data
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import questionsMap from "../../data/questionsMap";

// Utility function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function QuestionsPage() {
  const location = useLocation(); // Get the current location
  const queryParams = new URLSearchParams(location.search);
  const questionType = queryParams.get("type"); // Get the question type from query parameters
  const quizTitle = queryParams.get("title"); // Get the
  const [myQuestionsData, setmyQuestionsData] = useState([]);

  const [questions, setQuestions] = useState([]); // Shuffled questions state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question
  const [score, setScore] = useState(0); // Track the score
  const [showScore, setShowScore] = useState(false); // Show score at the end
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false); // Track if the answer is confirmed

  //my useeffect

  // useEffect(() => {}, [questionType]);
  //end my useeffect

  // Shuffle questions and answers when the component first renders
  // useEffect(() => {
  //   async function loadQuestions() {
  //     try {
  //       // Dynamically import the questions file based on questionType
  //       let qData;
  //       switch (questionType) {
  //         case "RME1":
  //           qData = await import("../../data/godscreationData");
  //           break;
  //         case "RME2":
  //           qData = await import("../../data/godscreation2");
  //           break;
  //         case "RME3":
  //           qData = await import("../../data/godscreation3");
  //           break;
  //         case "RME4":
  //           qData = await import("../../data/religiouspractices");
  //           break;
  //         default:
  //           qData = { default: [] };
  //       }
  //       setmyQuestionsData(qData.default);
  //     } catch (error) {
  //       console.error("Error loading questions:", error);
  //     }
  //   }

  //   loadQuestions();

  //   //mute
  //   // const shuffledQuestions = myQuestionsData.map((question) => ({
  //   //   ...question,
  //   //   answers: shuffleArray([...question.answers]), // Shuffle the answers for each question
  //   // }));
  //   // setQuestions(shuffleArray(shuffledQuestions)); // Shuffle the questions
  //   //end mute
  // }, [questionType]);

  useEffect(() => {
    try {
      const qData = questionsMap[questionType] || [];
      console.log("Loading new questions from: ", questionType);
      setmyQuestionsData(qData);
    } catch (error) {
      console.error("Error loading questions map:", error);
    }
  }, [questionType]);

  //old useeffect
  // useEffect(() => {
  //   async function loadQuestions() {
  //     try {
  //       // Construct file path based on questionType, assuming consistent naming
  //       const filePath = `../../data/${questionType}.js`;
  //       const qData = await import(filePath);
  //       console.log("Loading questions from:", filePath); // Log the file path

  //       setmyQuestionsData(qData.default || []);
  //     } catch (error) {
  //       console.error("Error loading questions:", error);
  //       setmyQuestionsData([]); // Fallback to empty data if there's an error
  //     }
  //   }

  //   loadQuestions();
  // }, [questionType]);

  //start

  useEffect(() => {
    if (myQuestionsData.length > 0) {
      const shuffledQuestions = myQuestionsData.map((question) => ({
        ...question,
        answers: shuffleArray([...question.answers]),
      }));
      setQuestions(shuffleArray(shuffledQuestions));
    }
  }, [myQuestionsData]);

  //end

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
    const shuffledQuestions = myQuestionsData.map((question) => ({
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
      <h1>Quiz: {quizTitle}</h1>

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
