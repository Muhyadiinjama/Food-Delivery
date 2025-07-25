// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        {/* Left: Brand + Social */}
        <div>
          <h2 className="text-2xl font-bold text-green-500">Food delivery 🥗</h2>
          <p className="text-gray-400 mt-2">
            Delicious food delivered fast to your door.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-green-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-500">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right: Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-400">Home</Link></li>
              <li><Link to="/menu" className="hover:text-green-400">Menu</Link></li>
              <li><Link to="/cart" className="hover:text-green-400">Cart</Link></li>
              <li><Link to="/login" className="hover:text-green-400">Login</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-green-400">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-green-400">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-green-400">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-green-400">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Food delivery. All rights reserved.
      </div>
    </footer>
  );
}
