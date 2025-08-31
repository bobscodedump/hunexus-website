import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Agentic AI', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'top-2' : 'top-4'
      }`}
    >
      <div
        className={`backdrop-blur-xl rounded-full border border-white/20 shadow-2xl transition-all duration-500 ${
          isScrolled ? 'bg-black/30' : 'bg-black/20'
        }`}
        style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
      >
        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center px-6 lg:px-8 py-4'>
          <div className='flex items-center mr-6 lg:mr-8'>
            <span className='text-white font-bold text-xl'>HuNexus</span>
          </div>
          <div className='flex items-center space-x-6 lg:space-x-8'>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className='text-white/90 hover:text-white transition-all duration-300 font-medium relative group whitespace-nowrap'
              >
                {item.name}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full'></span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className='md:hidden flex items-center justify-between px-6 py-4'>
          <span className='text-white font-bold'>HuNexus</span>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-white p-2'>
            {isMobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='md:hidden mt-2 backdrop-blur-xl bg-black/30 rounded-2xl border border-white/20 shadow-2xl'
          style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
        >
          <div className='py-4'>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className='block w-full text-left px-6 py-3 text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300'
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
