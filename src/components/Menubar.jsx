import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-white shadow">
      
       {/* Logo */}
      <Link className="flex justify-start items-center" to="/">
        <Logo />
        <span className="font-mono text-3xl md:text-4xl text-blue-400">InvoiceX</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center font-medium">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/generate">Generate</Link>
        <button
          type="button"
          className="bg-blue-600 py-2 px-4 text-white rounded-4xl"
        >
          LogIn/SignUp
        </button>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 md:hidden"
      >
        <span className="w-6 h-0.5 bg-gray-800"></span>
        <span className="w-6 h-0.5 bg-gray-800"></span>
        <span className="w-6 h-0.5 bg-gray-800"></span>
      </button>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
          <div className="flex flex-col items-center gap-5 py-6">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link to="/dashboard" onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>

            <Link to="/generate" onClick={() => setIsOpen(false)}>
              Generate
            </Link>

            <button
              type="button"
              className="bg-blue-600 py-2 px-4 text-white rounded-4xl"
              onClick={() => setIsOpen(false)}>
              LogIn/SignUp
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menubar;
