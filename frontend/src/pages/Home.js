import { useEffect, useState } from "react";
import { getMessages } from "../api/api";
import MessageCard from "../components/MessageCard";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchMessages = async () => {
    try {
      const res = await getMessages();
      // Ensure messages is always an array
      const msgs = Array.isArray(res.data) ? res.data : res.data.messages || [];
      setMessages(msgs);
    } catch (error) {
      console.error(error);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };
  fetchMessages();
}, []);


  if (loading)
    return <p className="text-center mt-8 text-gray-500 text-lg">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-6 px-4 sm:px-0">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Messages
      </h1>

      {messages.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No messages yet</p>
      ) : (
        <div className="flex flex-col gap-3">
          {messages.map((msg) => (
            <MessageCard key={msg._id} message={msg} />
          ))}
        </div>
      )}
    </div>
  );
}
