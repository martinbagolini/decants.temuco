import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Promociones', href: '#promotions' },
    { name: 'Catálogo', href: '#catalog' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-serif font-bold tracking-tighter">
          DECANTS<span className="orange-text-gradient">TEMUCO</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-5">
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-white/5 rounded-full transition-colors group"
          >
            <motion.div
              key={cartCount}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <ShoppingCart className="w-6 h-6 group-hover:text-orange transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </motion.div>
          </button>

          <button
            className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0a0a0a] z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col space-y-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif hover:text-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/56951936433"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 orange-gradient text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
