import { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import type { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Головна', page: 'home' },
  { label: 'Меню', page: 'menu' },
  { label: 'Про нас', page: 'about' },
  { label: 'Контакти', page: 'contact' },
];

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (page: Page) => {
    navigate(page);
    setMobileOpen(false);
  };

  const transparent = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-[#2C1810]/95 backdrop-blur-md shadow-lg shadow-black/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4681E] to-[#E8863A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Flame size={18} className="text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-white text-lg font-bold tracking-wide leading-none">
                Мясний Роджер
              </div>
              <div className="text-[10px] text-[#E8863A] uppercase tracking-widest font-medium">
                Ресторан
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  currentPage === page
                    ? 'text-[#E8863A] bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/8'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="ml-3 px-5 py-2 rounded-md text-sm font-semibold btn-primary text-white"
            >
              Забронювати
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#2C1810]/98 backdrop-blur-md border-t border-white/10 px-4 pb-4 pt-2 space-y-1">
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all ${
                currentPage === page
                  ? 'text-[#E8863A] bg-white/10'
                  : 'text-white/80 hover:text-white hover:bg-white/8'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="w-full mt-2 px-4 py-3 rounded-md text-sm font-semibold btn-primary text-white text-center"
          >
            Забронювати столик
          </button>
        </div>
      </div>
    </header>
  );
}
