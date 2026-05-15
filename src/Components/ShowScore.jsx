export default function ShowScore({ score, answersLength, onReset }) {
  return (
    <div className="score-section">
      <h2>🎉 Quiz Completed Successfully!</h2>
      <p className="score-text">
        Your score is <span className="score-number">{score}</span> out of{" "}
        <span className="score-number">{answersLength}</span>
      </p>
      <button className="restart-btn" onClick={onReset}>
        Restart Quiz 🔄
      </button>
    </div>
  );
}
