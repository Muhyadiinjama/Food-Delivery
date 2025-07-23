// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-green-600">404</h1>
        <p className="text-xl md:text-2xl text-gray-700 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-green-600 text-white rounded-full text-lg font-medium shadow hover:bg-green-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
