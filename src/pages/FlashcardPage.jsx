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
import AddCardModal from "../components/AddCardModal";

export default function FlashcardPage() {

  const [cards, setCards] = useState([{ question: "What is React?", answer: "A JavaScript library for building user interfaces." }]);

  function deleteCard(index) {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  }

  function handleAddCard(newCard) {
    // Add the new card to the existing list of cards
  }

  return (
    <div className="flex flex-col items-center m-5">
      {/* TODO: Add a title for the page here.
          Hint: we have a PageTitle component we used in the last section */}

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

      <AddCardModal onAddCard={handleAddCard} />

    </div>
  )
}