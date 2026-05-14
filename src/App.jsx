import { useState } from "react";
import { DUMMY_QUESTIONS } from "./util/questions";
import "./App.css"; // تأكد من إنك عامل import لملف الـ CSS
import ShowScore from "./Components/ShowScore";

function App() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const quizIsEnd = DUMMY_QUESTIONS.length === userAnswers.length;
  const questionNumber = userAnswers.length;

  function quizhandler(answer) {
    setSelectedAnswer(answer);

    // 2. نظبط التايمر
    setTimeout(() => {
      setUserAnswers((prevAnswer) => {
        return [...prevAnswer, answer];
      });
      setSelectedAnswer(null);
    }, 2000);
  }
  function handleReset() {
    setUserAnswers([]);
    setSelectedAnswer(null);
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

  return (
    <>
      <div className="app-container">
        <div className="quiz-card">
          <h2 className="question-text">
            {DUMMY_QUESTIONS[questionNumber].questionText}
          </h2>

          <div className="answers-container">
            {DUMMY_QUESTIONS[questionNumber].answerOptions.map((answer) => {
              let colorClass = "";

              // هل اليوزر اختار إجابة بالفعل؟
              if (selectedAnswer !== null) {
                if (answer.isCorrect) {
                  // 1. الإجابة الصح دايماً تنور أخضر
                  colorClass = "correct";
                } else if (selectedAnswer.answerText === answer.answerText) {
                  // 2. لو دي إجابة غلط، واليوزر هو اللي داس عليها، نورها أحمر
                  colorClass = "wrong";
                }
              }

              return (
                <button
                  onClick={() =>
                    selectedAnswer === null ? quizhandler(answer) : null
                  }
                  className={`answer-btn ${colorClass}`}
                  key={answer.answerText}
                >
                  {answer.answerText}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
