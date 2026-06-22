import { Flame, Instagram, Phone, MapPin } from 'lucide-react';
import type { Page } from '../App';

interface FooterProps {
  navigate: (page: Page) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-[#2C1810] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4681E] to-[#E8863A] flex items-center justify-center">
                <Flame size={18} className="text-white" />
              </div>
              <div>
                <div className="font-display text-lg font-bold leading-none">Мясний Роджер</div>
                <div className="text-[10px] text-[#E8863A] uppercase tracking-widest">Ресторан</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Місце, де м'ясо стає легендою. Соковитий шашлик, авторські соуси та атмосфера, до якої хочеться повертатися.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-semibold text-[#E8863A] mb-4 uppercase tracking-wider text-xs">Навігація</h4>
            <nav className="space-y-2">
              {(['home', 'menu', 'about', 'contact'] as Page[]).map((page) => {
                const labels: Record<Page, string> = {
                  home: 'Головна',
                  menu: 'Меню',
                  about: 'Про нас',
                  contact: 'Контакти',
                };
                return (
                  <button
                    key={page}
                    onClick={() => navigate(page)}
                    className="block text-white/60 hover:text-[#E8863A] text-sm transition-colors duration-200"
                  >
                    {labels[page]}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold text-[#E8863A] mb-4 uppercase tracking-wider text-xs">Контакти</h4>
            <div className="space-y-3">
              <a
                href="tel:+380441234567"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Phone size={15} className="text-[#E8863A]" />
                +38 (044) 123-45-67
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={15} className="text-[#E8863A] mt-0.5 flex-shrink-0" />
                вул. Хрещатик 22, Київ
              </div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-[#E8863A] text-sm transition-colors"
              >
                <Instagram size={15} className="text-[#E8863A]" />
                @myasnoy_roger
              </a>
              <div className="text-white/50 text-xs pt-1">
                Пн–Нд: 12:00 – 23:00
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Мясний Роджер. Всі права захищені.
          </p>
          <p className="text-white/30 text-xs">Київ, Україна</p>
        </div>
      </div>
    </footer>
  );
}
