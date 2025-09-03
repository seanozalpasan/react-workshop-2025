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

  return (
    <>
      <PageTitle contents="Flashcards" />
      <div className="flex flex-col items-center">
        {
          cards.length === 0 ? (
            <p>No flashcards available. Please add some!</p>
          ) : (
            cards.map((card, index) => (
              <Flashcard key={index} question={card.question} answer={card.answer} />
            ))
          )
        }
      </div>
    </>
  )
}