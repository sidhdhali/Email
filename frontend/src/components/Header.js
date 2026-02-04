import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
          Email App
        </h1>
        <Link
          to="/create"
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"
        >
          New Message
        </Link>
      </div>
    </header>
  );
}
