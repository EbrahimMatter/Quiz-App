import { useState } from "react";
import { DUMMY_QUESTIONS } from "./util/questions";
import "./App.css"; // تأكد من إنك عامل import لملف الـ CSS
import ShowScore from "./Components/ShowScore";

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizIsEnd, setQuizIsEnd] = useState(false);

  function quizhandler(answer) {
    // 1. نسجل الإجابة اللي انداس عليها
    setSelectedAnswer(answer);

    // 2. نظبط التايمر
    setTimeout(() => {
      if (answer.isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
      if (questionNumber + 1 >= DUMMY_QUESTIONS.length) {
        // لو آخر سؤال، انهي الكويز
        setQuizIsEnd(true);
      } else {
        // لو لسة في أسئلة، انقل على اللي بعده
        setQuestionNumber(questionNumber + 1);
      }

      // 3. نقلنا تصفير الذاكرة جوه التايمر عشان يتنفذ بعد الثانيتين
      setSelectedAnswer(null);
    }, 2000);
  }
  function handleReset() {
    setQuestionNumber(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizIsEnd(false);
  }

  return (
    <>
      {quizIsEnd ? (
        <ShowScore
          score={score}
          answersLength={DUMMY_QUESTIONS.length}
          onReset={handleReset}
        />
      ) : (
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
                    onClick={() => quizhandler(answer)}
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
      )}
    </>
  );
}
export default App;
