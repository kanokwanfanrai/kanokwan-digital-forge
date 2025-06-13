
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import ProfileDropdown from './ProfileDropdown';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-green-400">
            Kanokwan
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              Contact
            </button>
            
            {!loading && (
              user ? (
                <ProfileDropdown />
              ) : (
                <Link
                  to="/auth"
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <LogIn className="w-4 h-4" />
                  <span>เข้าสู่ระบบ</span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-green-400"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg mt-2 p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left"
              >
                Contact
              </button>
              
              {!loading && (
                user ? (
                  <div className="pt-2">
                    <ProfileDropdown />
                  </div>
                ) : (
                  <Link
                    to="/auth"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn className="w-4 h-4" />
                    <span>เข้าสู่ระบบ</span>
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
