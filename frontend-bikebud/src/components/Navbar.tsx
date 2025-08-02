import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 translate-y-0 opacity-100 transition-all duration-500">
      <div className="glass rounded-full px-6 py-3 mx-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold font-space text-gradient">BikeBud</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 mx-8">
            <a href="#home" className="text-white hover:text-neon-purple px-3 py-2 text-sm font-medium font-space transition-all duration-300 hover:scale-105">Home</a>
            <a href="#features" className="text-gray-300 hover:text-neon-pink px-3 py-2 text-sm font-medium font-space transition-all duration-300 hover:scale-105">Features</a>
            <a href="#reviews" className="text-gray-300 hover:text-neon-cyan px-3 py-2 text-sm font-medium font-space transition-all duration-300 hover:scale-105">Reviews</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full glass hover:bg-gray-800/20 transition-all duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-700/20">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-white hover:text-neon-purple px-3 py-2 text-sm font-medium font-space transition-all duration-300">Home</a>
              <a href="#features" className="text-gray-300 hover:text-neon-pink px-3 py-2 text-sm font-medium font-space transition-all duration-300">Features</a>
              <a href="#reviews" className="text-gray-300 hover:text-neon-cyan px-3 py-2 text-sm font-medium font-space transition-all duration-300">Reviews</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;