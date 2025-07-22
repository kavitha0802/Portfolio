import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          My Portfolio
        </Link>

        {/* Hamburger icon */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Simple hamburger bars */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links for larger screens */}
        <ul className="hidden sm:flex space-x-6 text-sm">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/projects" className="hover:underline">Projects</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul className="sm:hidden px-4 pb-4 space-y-2 text-sm">
          <li><Link to="/" onClick={toggleMenu} className="block hover:underline">Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className="block hover:underline">About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu} className="block hover:underline">Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className="block hover:underline">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
