/**
 * FlashcardPage.jsx
 * By: Will Soylemez
 * JumboCode Fall 2025
 * 
 * TODO description
 */

import { useState } from "react";
import PageTitle from "../components/PageTitle";
import Flashcard from "../components/Flashcard";

export default function FlashcardPage() {
  
  const [cards, setCards] = useState([{ question: "What is React?", answer: "A JavaScript library for building user interfaces." }]);

  function deleteCard(index) {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  }

  return (
    <>
      <PageTitle contents="Flashcards" />
      <div className="flex flex-col items-center">
        <p className="mb-2">You have 0 flashcards</p>
        {
          cards.length === 0 ? (
            <p>No flashcards available. Please add some!</p>
          ) : (
            cards.map((card, index) => (
              <Flashcard
                key={index}
                question={card.question}
                answer={card.answer}
                onDelete={() => deleteCard(index)}
              />
            ))
          )
        }
      </div>
    </>
  )
}