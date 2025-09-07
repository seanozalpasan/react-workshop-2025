/**
 * FlashcardPage.jsx
 * By: Will Soylemez
 * JumboCode Fall 2025
 * 
 * This is the main page for viewing and managing flashcards! To add missing functionality,
 * you'll need to make changes in this file and in the components it uses. Good luck and have fun!
 * 
 * TODOs:
 * - Add a title to the page
 * - Implement card flipping (is that in this file?)
 * - Implement card deletion
 * - Implement adding new cards
 */

import { useState } from "react";
import PageTitle from "../components/PageTitle";
import Flashcard from "../components/Flashcard";
import AddCardModal from "../components/AddCardModal";
import { saveFlashcards, fetchFlashcards } from "../utils/api";

export default function FlashcardPage() {

  const [cards, setCards] = useState([{ question: "What is React?", answer: "A JavaScript library for building user interfaces." }]);

  function deleteCard(index) {
    // When modifying state that is an array or object, we need to create a new
    // array or object instead of modifying the existing one. This is because
    // React relies on detecting changes to state to know when to re-render
    // components, and it can't detect changes if we modify the existing
    // array or object directly.

    // Create a new array excluding the card at the specified index
    // Hint: you can use the `filter` method on arrays to do this, or you can use
    // a loop to copy all elements except the one at `index`.
    const newCards = cards.filter((_, i) => i !== index);

    // Update the state with the new array
    setCards(newCards);
  }

  function handleAddCard(newCard) {
    // Like with deleteCard, we need to create a new array instead of modifying
    // the existing one directly.

    // Create a new array that includes all existing cards plus the new card
    const newCards = [...cards, newCard];

    // Update the state with the new array
    setCards(newCards);
  }

  /*
  * This function is called when the "Save Flashcards" button is clicked.
  * It sends the current list of flashcards to the backend server to be saved.
  */
  function handleSave() {
    saveFlashcards(cards) // 
      .then(response => {
        alert("Flashcards saved successfully!");
      })
      .catch(error => {
        alert("Failed to save flashcards.");
        console.error("Error saving flashcards:", error);
      });
  }

  /*
  * This function is called when the "Load Flashcards" button is clicked.
  * It fetches the list of flashcards from the backend server.
  * TODO: Finish this function! Hint: this will be very similar to handleSave
  * but we have to do something with the response data.
  */
  async function handleLoad() {
    alert("Loading flashcards is not yet implemented.");
  }


  return (
    <div className="flex flex-col items-center m-5">
      {/* TODO: Add a title for the page here.
        * Hint: we have a PageTitle component we used in the last section */}
      <PageTitle contents="Flashcards" />

      {/* The buttons here are used to save and load flashcards.
        * Saving is already implemented for you! */}
      <div className="mb-4 flex flex-row gap-2">
        <button
          onClick={handleSave}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors mr-2"
        >
          Save Flashcards
        </button>

        <button
          onClick={handleLoad}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Load Flashcards
        </button>
      </div>

      {
        // If there are no cards, display a message saying so
        cards.length === 0 ? (
          <p>No flashcards available. Please add some!</p>
        ) : (
          // Map over the cards and render a Flashcard for each one
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

      {/* AddCardModal component to add new cards */}
      <AddCardModal onAddCard={handleAddCard} />
    </div>
  )
}