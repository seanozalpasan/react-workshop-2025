export default function DeleteButton({ onDelete }) {
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <button
      onClick={handleDelete}
      className="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-sm font-bold transition-colors"
    >
      X
    </button>
  );
}