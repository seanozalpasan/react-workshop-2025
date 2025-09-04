/**
 * DeleteButton.jsx
 * By: Will Soylemez
 * JumboCode Fall 2025
 * 
 * Delete button component for flashcards. Devs shouldn't
 * need to modify this file to delete cards!
 */

export default function DeleteButton({ onDelete }) {

  // Function to handle delete button click
  const handleDelete = (e) => {
    e.stopPropagation(); // This prevents the card from flipping when the delete button is clicked
    onDelete();
  };

  // Optional TODO: add a real icon instead of "X"
  // You can use libraries like FontAwesome or Heroicons for better icons
  return (
    <button
      onClick={handleDelete}
      className="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-sm font-bold transition-colors"
    >
      X
    </button>
  );
}