import { useState } from "react";
import { NavLink} from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/offers", label: "Offers" },
    { path: "/products", label: "Products" },
  ];

  return (
    <nav className="md:relative fixed z-50  bg-gray-900 shadow-md w-full">
      {/* top bar */}
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-white font-bold text-2xl tracking-wide">
          Uncle Shekabala
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              className={({ isActive }) =>
                `text-white hover:text-gray-300 transition duration-200 ${
                  isActive ? "font-semibold border-b-2 border-gray-400" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-900 py-4 space-y-4 border-t border-gray-700 ">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              onClick={() => setIsOpen(false)}
              className="text-white text-lg hover:text-indigo-400 transition"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
