import { useEffect, useState, useCallback } from "react";
import { DUMMY_QUESTIONS } from "./util/questions";
import "./App.css";
import ShowScore from "./Components/ShowScore";

function App() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [progressBar, setProgressBar] = useState(10000);

  const quizIsEnd = DUMMY_QUESTIONS.length === userAnswers.length;
  const questionNumber = userAnswers.length;

  const quizhandler = useCallback((answer) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      setUserAnswers((prevAnswer) => [...prevAnswer, answer]);
      setProgressBar(10000);
      setSelectedAnswer(null);
    }, 2000);
  }, []);

  useEffect(() => {
    if (quizIsEnd || selectedAnswer !== null) {
      return;
    }
    const timer = setInterval(() => {
      setProgressBar((prevProgress) => {
        if (prevProgress <= 0) {
          return 0;
        }
        return prevProgress - 100;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [questionNumber, selectedAnswer, quizIsEnd]);

  useEffect(() => {
    if (progressBar <= 0 && selectedAnswer === null && !quizIsEnd) {
      quizhandler({ isCorrect: false, answerText: "", isTimeout: true });
    }
  }, [progressBar, selectedAnswer, quizIsEnd, quizhandler]);

  function handleReset() {
    setUserAnswers([]);
    setSelectedAnswer(null);
    setProgressBar(10000);
  }

  if (quizIsEnd) {
    const score = userAnswers.filter((answer) => answer.isCorrect).length;
    return (
      <ShowScore
        score={score}
        answersLength={DUMMY_QUESTIONS.length}
        onReset={handleReset}
      />
    );
  }

  const progressClass = progressBar <= 3000 ? "danger" : "";

  return (
    <div className="app-container">
      <div className="quiz-card">
        <progress
          className={progressClass}
          max="10000"
          value={progressBar}
        ></progress>
        <h2 className="question-text">
          {DUMMY_QUESTIONS[questionNumber].questionText}
        </h2>
        <div className="answers-container">
          {DUMMY_QUESTIONS[questionNumber].answerOptions.map((answer) => {
            let colorClass = "";
            if (selectedAnswer !== null) {
              if (answer.isCorrect) {
                colorClass = "correct";
              } else if (
                !selectedAnswer.isTimeout &&
                selectedAnswer.answerText === answer.answerText
              ) {
                colorClass = "wrong";
              }
            }
            return (
              <button
                key={answer.id}
                disabled={selectedAnswer !== null}
                onClick={() => quizhandler(answer)}
                className={`answer-btn ${colorClass}`}
              >
                {answer.answerText}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
