import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, Menu, X, ChevronRight, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

const Navbar = ({ isDashboard = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    toast.success('Logged out successfully');
    navigate('/');
  };

  const navLinks = [
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Community', href: '/feed', type: 'route' },
    { name: 'Technology', href: '/#technology' },
    { name: 'Roadmap', href: '/#roadmap' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4 bg-background/80 backdrop-blur-lg border-bottom border-white/5' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-xl flex items-center justify-center text-background font-bold text-xl shadow-glow-blue group-hover:scale-110 transition-transform">
            ST
          </div>
          <span className="font-space text-2xl tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            ShiftTokens
          </span>
        </Link>

        {/* Desktop Links */}
        {!isDashboard && (
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.type === 'route' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-text-muted hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-muted hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        )}

        {/* CTA Actions */}
        <div className="flex items-center gap-4">
          {isDashboard ? (
            <button
              onClick={handleLogout}
              className="hidden sm:flex items-center gap-2 text-text-muted hover:text-accent-red transition-colors text-sm font-semibold px-4 cursor-pointer"
            >
              <LogOut size={16} /> Logout
            </button>
          ) : (
            <Link 
              to="/login" 
              className="hidden sm:flex text-text-light hover:text-accent-blue transition-colors text-sm font-semibold px-4"
            >
              Log In
            </Link>
          )}
          <Link
            to={isDashboard ? location.pathname : "/worker"}
            className="btn-premium btn-glow-blue !py-2.5 !px-6 text-sm"
          >
            {isDashboard ? 'Active Session' : 'Get Cash'} <ChevronRight size={16} />
          </Link>
          
          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-card/95 backdrop-blur-2xl border-b border-white/5 p-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {!isDashboard && navLinks.map((link) => (
                link.type === 'route' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-xl font-space text-text-light"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xl font-space text-text-light"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Link to="/login" className="text-xl font-space text-accent-blue">Login</Link>
              {isDashboard && (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 text-xl font-space text-accent-red"
                >
                  <LogOut size={24} /> Logout
                </button>
              )}
              <Link
                to={isDashboard ? location.pathname : "/worker"}
                className="btn-premium btn-glow-blue w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isDashboard ? 'Return to App' : 'Launch App'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
