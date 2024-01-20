/* eslint-disable react/prop-types */

export default function Question({ question, isShown, onToggleIsShown }) {
  return (
    <div className="question-container">
      <h3 className="question" onClick={onToggleIsShown}>
        {question}
      </h3>
      <button
        className="view-answer-btn"
        onClick={onToggleIsShown}
        onFocus={onToggleIsShown}
      >
        {isShown ? (
          <img src="../src/assets/images/icon-minus.svg" />
        ) : (
          <img src="../src/assets/images/icon-plus.svg" />
        )}
      </button>
    </div>
  );
}
