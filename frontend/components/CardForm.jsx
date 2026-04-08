import { useState } from "react";
import { createMood } from "../services/appwriteDB";

const CardForm = () => {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !emoji || !note) return;

    setLoading(true);

    try {
      await createMood({
        name,
        emoji,
        note,
      });

      setName("");
      setEmoji("");
      setNote("");
    } catch (error) {
      console.error("Failed to create mood:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <h2 className="text-xl font-semibold">Add Your Mood</h2>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Mood emoji 🙂"
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <textarea
        placeholder="How are you feeling?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full p-2 border rounded"
        rows={3}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white p-2 rounded"
      >
        {loading ? "Saving..." : "Submit Mood"}
      </button>
    </form>
  );
};

export default CardForm;
``