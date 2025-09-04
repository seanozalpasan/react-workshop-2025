import { useState } from "react";

export default function AddCardModal({ onAddCard }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    
  };

  return (
    <div className="m-5 flex flex-col gap-3 w-80">
      <h3 className="text-lg font-medium mb-3">Add New Card</h3>

        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answer"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

    </div>
  );
}