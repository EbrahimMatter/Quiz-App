export default function ShowScore({ score, answersLength, onReset }) {
  return (
    <div className="score-section">
      <h2>🎉 كملت الكويز بنجاح!</h2>
      <p className="score-text">
        نتيجتك هي <span className="score-number">{score}</span> من{" "}
        <span className="score-number">{answersLength}</span>
      </p>
      <button className="restart-btn" onClick={onReset}>
        إعادة الكويز 🔄
      </button>
    </div>
  );
}
