/* eslint-disable react/prop-types */

import Answer from "./Answer";
import Question from "./Question";
import { useState } from "react";

export default function AccordionItem({ itemData }) {
  const [isShown, setIsShown] = useState(false);

  function handleToggleIsShown() {
    setIsShown((currentState) => !currentState);
  }

  return (
    <div className="accordion-item">
      <Question
        question={itemData.question}
        isShown={isShown}
        onToggleIsShown={handleToggleIsShown}
      />
      {isShown && <Answer answer={itemData.answer} isShown={isShown} />}
    </div>
  );
}
