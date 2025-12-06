// src/components/Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full lg:h-[105px] pt-4 px-4">
      <nav className="w-full bg-[#EFEFEF] py-4 lg:py-5 px-4 lg:px-8 rounded-[20px] border-2 border-dark-100">
        <div className="max-w-[1820px] flex justify-between items-center">
          {/* Logo */}
          <div className="text-primary text-2xl lg:text-3xl font-barlow font-semibold">
            NexGen
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden w-10 h-10 bg-primary rounded-lg flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <button className="px-6 py-2 h-13 bg-primary text-white font-barlow font-medium rounded-lg">
              Home
            </button>
            <button className="font-barlow font-medium text-dark-300 hover:text-primary transition">
              Services
            </button>
            <button className="font-barlow font-medium text-dark-300 hover:text-primary transition">
              Work
            </button>
            <button className="font-barlow font-medium text-dark-300 hover:text-primary transition">
              Process
            </button>
            <button className="font-barlow font-medium text-dark-300 hover:text-primary transition">
              About
            </button>
            <button className="font-barlow font-medium text-dark-300 hover:text-primary transition">
              Careers
            </button>
          </div>

          {/* Contact Button - Desktop */}
          <button className="hidden lg:block px-6 py-2 h-13 bg-primary text-white font-barlow font-medium rounded-lg hover:bg-primary-hover transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
            <button className="w-full py-3 bg-primary text-white font-barlow font-medium rounded-lg">
              Home
            </button>
            <button className="w-full py-3 font-barlow font-medium text-dark-300 hover:text-primary transition text-left">
              Services
            </button>
            <button className="w-full py-3 font-barlow font-medium text-dark-300 hover:text-primary transition text-left">
              Work
            </button>
            <button className="w-full py-3 font-barlow font-medium text-dark-300 hover:text-primary transition text-left">
              Process
            </button>
            <button className="w-full py-3 font-barlow font-medium text-dark-300 hover:text-primary transition text-left">
              About
            </button>
            <button className="w-full py-3 font-barlow font-medium text-dark-300 hover:text-primary transition text-left">
              Careers
            </button>
            <button className="w-full py-3 bg-primary text-white font-barlow font-medium rounded-lg hover:bg-primary-hover transition">
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;