import { Phone, MapPin, Clock, Instagram, Flame, Mail } from 'lucide-react';
import ReservationForm from '../components/ReservationForm';
import Img from '../components/Img';
import Footer from '../components/Footer';
import type { Page } from '../App';

interface ContactProps {
  navigate?: (page: Page) => void;
}

const hours = [
  { day: "Понеділок – П'ятниця", time: '12:00 – 23:00' },
  { day: 'Субота', time: '11:00 – 00:00' },
  { day: 'Неділя', time: '11:00 – 23:00' },
];

export default function Contact({ navigate }: ContactProps) {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <Img
          src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Контакти"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/72" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <Flame size={14} className="text-[#E8863A]" />
            <span className="text-white/90 text-sm">Зустрінемось за столом</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold">Контакти</h1>
          <p className="text-white/70 mt-2">Ми завжди раді вас бачити</p>
        </div>
      </div>

      {/* Info + Form */}
      <section className="py-16 md:py-24 bg-[#FBF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="text-[#D4681E] font-semibold text-sm uppercase tracking-widest mb-2">Знайти нас</p>
                <h2 className="font-display text-2xl sm:text-3xl text-[#2C1810] font-bold mb-6">
                  Будемо раді зустріти вас
                </h2>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                <a
                  href="tel:+380441234567"
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4681E] to-[#E8863A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9B9589] font-medium uppercase tracking-wider mb-0.5">Телефон</div>
                    <div className="text-[#2C1810] font-semibold">+38 (044) 123-45-67</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4681E] to-[#E8863A] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9B9589] font-medium uppercase tracking-wider mb-0.5">Адреса</div>
                    <div className="text-[#2C1810] font-semibold">вул. Хрещатик 22</div>
                    <div className="text-[#6B4F3A] text-sm">Київ, Україна</div>
                  </div>
                </div>

                <a
                  href="mailto:info@myasnoyroger.ua"
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4681E] to-[#E8863A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9B9589] font-medium uppercase tracking-wider mb-0.5">Email</div>
                    <div className="text-[#2C1810] font-semibold">info@myasnoyroger.ua</div>
                  </div>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4681E] to-[#E8863A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9B9589] font-medium uppercase tracking-wider mb-0.5">Instagram</div>
                    <div className="text-[#2C1810] font-semibold">@myasnoy_roger</div>
                  </div>
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={18} className="text-[#D4681E]" />
                  <h3 className="font-semibold text-[#2C1810]">Години роботи</h3>
                </div>
                <div className="space-y-2.5">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="text-[#6B4F3A] text-sm">{day}</span>
                      <span className="text-[#2C1810] font-semibold text-sm">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reservation form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                <h3 className="font-display text-2xl text-[#2C1810] font-bold mb-2">Забронювати столик</h3>
                <p className="text-[#6B4F3A] text-sm mb-6">Заповніть форму і ми зв'яжемось з вами</p>
                <ReservationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 md:h-[460px] relative">
        <div className="absolute inset-0 bg-[#E8D8C4] flex items-center justify-center">
          <div className="w-full h-full">
            <iframe
              title="Мясний Роджер на карті"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5456025085674!2d30.52219!3d50.44773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4e576cf0e5%3A0x1b1b1b1b1b1b1b1b!2z0XXQuy4g0KXRgNC10YnQsNGC0LjQutCwIDIyLCDQmtC40ZfQstGB0LXQug!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'sepia(15%) contrast(95%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        {/* Overlay card */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white rounded-xl shadow-xl p-4 max-w-xs z-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4681E] to-[#E8863A] flex items-center justify-center">
              <Flame size={15} className="text-white" />
            </div>
            <div>
              <div className="font-display text-sm font-bold text-[#2C1810]">Мясний Роджер</div>
              <div className="text-[10px] text-[#E8863A] uppercase tracking-wider">Ресторан</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#6B4F3A]">
            <MapPin size={12} className="text-[#D4681E]" />
            вул. Хрещатик 22, Київ
          </div>
        </div>
      </section>

      {navigate && <Footer navigate={navigate} />}
    </div>
  );
}
