/**
 * Flashcard.jsx
 * By: Will Soylemez
 * JumboCode Fall 2025
 * 
 * TODO description
 */

import { useState } from "react";

export default function Flashcard({ question, answer }) {

  const [showAnswer, setShowAnswer] = useState(false);

  const flipCard = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="w-80 h-48 cursor-pointer" onClick={flipCard}>
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${showAnswer ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center p-6">
          <h2 className="text-xl font-semibold text-white text-center">{question}</h2>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg flex items-center justify-center p-6 rotate-y-180">
          <p className="text-lg text-white text-center">{answer}</p>
        </div>
      </div>
    </div>
  )
}