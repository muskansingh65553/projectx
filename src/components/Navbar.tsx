
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-dark/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center group">
              <div className="h-8 w-8 relative">
                <div className="absolute inset-0 bg-orange-500 rounded-md animate-pulse-glow"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-dark-accent rounded-md">
                  <Terminal size={20} className="text-orange-500" />
                </div>
              </div>
              <span className="text-xl font-bold text-white ml-2 relative overflow-hidden group-hover:after:translate-x-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-x-[-100%] after:bg-orange-500 after:transition-transform after:duration-300">
                StaticHost
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-orange-500 transition-colors relative overflow-hidden hover:after:translate-x-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-x-[-100%] after:bg-orange-500 after:transition-transform after:duration-300">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-orange-500 transition-colors relative overflow-hidden hover:after:translate-x-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-x-[-100%] after:bg-orange-500 after:transition-transform after:duration-300">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-orange-500 transition-colors relative overflow-hidden hover:after:translate-x-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-x-[-100%] after:bg-orange-500 after:transition-transform after:duration-300">Testimonials</a>
            <a href="#faq" className="text-gray-300 hover:text-orange-500 transition-colors relative overflow-hidden hover:after:translate-x-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-x-[-100%] after:bg-orange-500 after:transition-transform after:duration-300">FAQ</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-gray-700 hover:border-orange-500 text-gray-300 hover:text-white hover:bg-dark-accent transition-all">
              Sign in
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:from-orange-600 hover:to-orange-500 relative overflow-hidden shadow-lg shadow-orange-500/20 group">
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center">
                Get Started <Zap size={16} className="ml-2 animate-pulse" />
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-orange-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-dark-accent border-t border-gray-800 animate-fade-in">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a href="#features" className="text-gray-300 hover:text-orange-500 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-orange-500 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-orange-500 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="text-gray-300 hover:text-orange-500 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <Button variant="outline" className="w-full border-gray-700 hover:border-orange-500 text-gray-300 hover:text-white hover:bg-dark-accent transition-all">
              Sign in
            </Button>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:from-orange-600 hover:to-orange-500 shadow-lg shadow-orange-500/20">
              Get Started <Zap size={16} className="ml-2 animate-pulse" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
