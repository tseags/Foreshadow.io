import React, { useState, useEffect } from 'react';
import { Button } from './Button';

interface NavbarProps {
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass border-b border-gray-100 py-3' : 'bg-white py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <img
            src="/logo.png"
            alt="Foreshadow"
            className="h-36 -my-12 w-auto"
            decoding="async"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
        </div>

        <div>
          <Button variant="primary" size="md" onClick={onOpenWaitlist}>
            Join the Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};
