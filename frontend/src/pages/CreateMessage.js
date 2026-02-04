import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createMessage } from "../api/api";

export default function CreateMessage() {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subject || !text) return setError("Both fields are required");
    if (subject.length > 40) return setError("Subject max 40 characters");

    try {
      await createMessage({ subject, text });
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Failed to create message");
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded shadow max-w-md sm:max-w-lg mx-auto mt-6">
      {/* Back link */}
      <Link
        to="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to Messages
      </Link>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Create Message
      </h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-bold mb-2">Subject*</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            maxLength={40}
            placeholder="Enter subject (max 40 chars)"
          />
        </div>

        <div>
          <label className="block font-bold mb-2">Text*</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            rows={6}
            placeholder="Enter your message text"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Create
          </button>

          {/* Cancel button */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full sm:w-auto bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
