import { Link } from "react-router-dom";

export default function MessageCard({ message }) {
  const formattedDate = new Date(message.date).toLocaleDateString("en-GB");

  return (
    <Link
      to={`/messages/${message._id}`}
      className="block p-4 bg-white rounded shadow hover:bg-gray-50 mb-3 transition-colors"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        {/* Subject */}
        <h2
          className="font-bold text-lg sm:text-xl break-words max-w-full truncate sm:truncate-none"
          style={{ wordBreak: "break-word" }}
        >
          {message.subject}
        </h2>

        {/* Date */}
        <span className="text-gray-500 text-sm sm:text-base whitespace-nowrap">
          {formattedDate}
        </span>
      </div>
    </Link>
  );
}
