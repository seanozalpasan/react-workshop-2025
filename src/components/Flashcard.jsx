/**
 * Flashcard.jsx
 * By: Will Soylemez
 * JumboCode Fall 2025
 * 
 * TODO description
 */

import { useState } from "react";

export default function FlashcardPage({ question, answer }) {

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <h2 className="text-xl">{question}</h2>
      {showAnswer && <p>{answer}</p>}
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
    </>
  )
}