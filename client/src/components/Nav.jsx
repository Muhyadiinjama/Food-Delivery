import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-green-600">
            🥗 Food delivery
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-green-600 font-medium">
              Menu
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-green-600 font-medium">
              Cart
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-green-600 font-medium">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/" className="block py-2 text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link to="/menu" className="block py-2 text-gray-700 hover:text-green-600">
            Menu
          </Link>
          <Link to="/cart" className="block py-2 text-gray-700 hover:text-green-600">
            Cart
          </Link>
          <Link to="/login" className="block py-2 text-gray-700 hover:text-green-600">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
