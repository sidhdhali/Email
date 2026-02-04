import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getMessageById, deleteMessage } from "../api/api";

export default function MessageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await getMessageById(id);
        setMessage(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessage();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      await deleteMessage(id);
      navigate("/");
    }
  };

  if (!message) return <p className="text-center mt-8">Loading...</p>;

  const formattedDate = new Date(message.date).toLocaleDateString("en-GB");

  return (
    <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto mt-6">
      {/* Back button */}
      <Link
        to="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to Messages
      </Link>

      {/* Header: subject + date */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
        <h1
          className="text-2xl sm:text-3xl font-bold break-words word-wrap max-w-full"
          style={{ wordBreak: "break-word" }}
        >
          {message.subject}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base whitespace-nowrap">
          {formattedDate}
        </p>
      </div>

      {/* Message text */}
      <p className="mb-6 text-gray-700 whitespace-pre-wrap">{message.text}</p>

      {/* Delete button */}
      <button
        onClick={handleDelete}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full sm:w-auto"
      >
        Delete
      </button>
    </div>
  );
}
