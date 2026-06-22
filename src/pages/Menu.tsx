import { useState } from 'react';
import { Flame } from 'lucide-react';
import Img from '../components/Img';
import Footer from '../components/Footer';
import type { Page } from '../App';

interface MenuProps {
  navigate?: (page: Page) => void;
}

const categories = [
  { id: 'mangal', label: 'Мангал', emoji: '🔥' },
  { id: 'shashlik', label: 'Шашлик', emoji: '🥩' },
  { id: 'lula', label: 'Люля-кебаб', emoji: '🫕' },
  { id: 'garnir', label: 'Гарніри', emoji: '🥗' },
  { id: 'sousy', label: 'Соуси', emoji: '🫙' },
  { id: 'napoi', label: 'Напої', emoji: '🥤' },
];

const menuItems: Record<string, {
  name: string;
  desc: string;
  price: string;
  weight: string;
  img: string;
  popular?: boolean;
}[]> = {
  mangal: [
    {
      name: 'Ребра свинячі на мангалі',
      desc: "Мариновані в авторських спеціях ребра, запечені до рум'яної скоринки на живому вугіллі",
      price: '340 грн',
      weight: '350г',
      img: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
    {
      name: 'Антрекот на кістці',
      desc: 'Яловичий антрекот на кістці з запашними травами та розмарином, приготований на вугільному жарі',
      price: '520 грн',
      weight: '400г',
      img: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Курчатко тютюн на мангалі',
      desc: 'Ніжне запечене курча під пресом зі спеціями та цитрусовою ноткою',
      price: '420 грн',
      weight: '600г',
      img: 'https://images.pexels.com/photos/2741457/pexels-photo-2741457.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Колдуни на мангалі',
      desc: "Традиційні картопляні котлети з м'ясною начинкою, запечені на грилі до золотистої скоринки",
      price: '220 грн',
      weight: '300г',
      img: 'https://images.pexels.com/photos/5718100/pexels-photo-5718100.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
  ],
  shashlik: [
    {
      name: 'Шашлик зі свинини',
      desc: 'Соковитий шашлик із свинячого ошийка, маринований у цибулі та спеціях. Класика жанру',
      price: '280 грн',
      weight: '300г',
      img: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
    {
      name: 'Шашлик із яловичини',
      desc: 'Преміальна яловичина на шампурах з маринадом на основі соєвого соусу та імбиру',
      price: '360 грн',
      weight: '300г',
      img: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Шашлик із курки',
      desc: 'Куряче стегно без кістки в кефірному маринаді з часником і пряними травами',
      price: '220 грн',
      weight: '300г',
      img: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Шашлик мікс',
      desc: "Асорті зі свинини, яловичини та курки на одному шампурі — для справжніх любителів м'яса",
      price: '320 грн',
      weight: '350г',
      img: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
  ],
  lula: [
    {
      name: 'Люля-кебаб класичний',
      desc: 'Соковитий фарш із яловичини та цибулі на шампурі — рецепт, перевірений роками',
      price: '260 грн',
      weight: '280г',
      img: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
    {
      name: 'Люля-кебаб баранина',
      desc: 'Ароматний кебаб із баранячого фаршу з кінзою та зірою — справжній смак Сходу',
      price: '300 грн',
      weight: '280г',
      img: 'https://images.pexels.com/photos/4110461/pexels-photo-4110461.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Люля-кебаб курячий',
      desc: 'Легкий та ніжний кебаб із курячого фаршу з зеленню та спеціями',
      price: '230 грн',
      weight: '260г',
      img: 'https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  garnir: [
    {
      name: 'Овочі гриль',
      desc: 'Баклажани, цукіні, болгарський перець та гриби на вугіллі з оливковою олією',
      price: '180 грн',
      weight: '350г',
      img: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
    {
      name: 'Картопля на мангалі',
      desc: 'Молода картопля, запечена у фользі з вершковим маслом та зеленню',
      price: '120 грн',
      weight: '300г',
      img: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Рис із зеленню',
      desc: 'Розсипчастий рис баsmati з кінзою, петрушкою та легкою заправкою',
      price: '100 грн',
      weight: '200г',
      img: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Свіжий салат',
      desc: 'Сезонні томати, огірки, пучок зелені з оливковою олією та морською сіллю',
      price: '130 грн',
      weight: '250г',
      img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  sousy: [
    {
      name: 'Авторська аджика',
      desc: 'Гостра домашня аджика на томатній основі з перцем чилі та пряними травами',
      price: '80 грн',
      weight: '100г',
      img: 'https://images.pexels.com/photos/4552848/pexels-photo-4552848.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
    {
      name: 'Горіховий соус',
      desc: 'Ніжний соус з волоських горіхів із часником та кінзою — ідеально до курки',
      price: '80 грн',
      weight: '100г',
      img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Часниковий із зеленню',
      desc: 'Кремовий соус на кефірній основі з часником, кропом і петрушкою',
      price: '75 грн',
      weight: '100г',
      img: 'https://images.pexels.com/photos/4109905/pexels-photo-4109905.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Соус "Три соуси" (сет)',
      desc: "Всі три авторські соуси в одному сеті — ідеально до будь-якого м'яса",
      price: '200 грн',
      weight: '300г',
      img: 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
  ],
  napoi: [
    {
      name: 'Домашній лимонад',
      desc: "Свіжовичавлений лимонад з лимоном, м'ятою та медом",
      price: '120 грн',
      weight: '500мл',
      img: 'https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=600',
      popular: true,
    },
    {
      name: 'Узвар домашній',
      desc: 'Традиційний узвар із сухофруктів — смак дитинства',
      price: '90 грн',
      weight: '400мл',
      img: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Мінеральна вода',
      desc: 'Sparkling або still, 0.5л',
      price: '60 грн',
      weight: '500мл',
      img: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Свіжевижатий сік',
      desc: 'Апельсиновий, яблучний або морквяний — на вибір',
      price: '130 грн',
      weight: '350мл',
      img: 'https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-158053.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
};

export default function Menu({ navigate }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState('mangal');

  const items = menuItems[activeCategory] || [];

  return (
    <div>
      {/* Hero */}
      <div className="relative h-64 pt-14 sm:h-80 sm:pt-0 flex items-center justify-center overflow-hidden">
        <Img
          src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Меню"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <Flame size={14} className="text-[#E8863A]" />
            <span className="text-white/90 text-sm">Свіже меню</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold">Наше меню</h1>
          <p className="text-white/70 mt-2 text-base">Все найкраще з нашого мангалу</p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="bg-white sticky top-14 sm:top-[72px] z-40 shadow-sm border-b border-[#E8D8C4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#D4681E] to-[#E8863A] text-white shadow-md shadow-orange-200'
                    : 'text-[#4A3728] hover:bg-[#F5E6D0] bg-[#FBF5EC]'
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl card-hover border border-[#F0E4D2] group"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <Img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                {item.popular && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-[#D4681E] to-[#E8863A] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      Популярне
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <span className="text-white text-xs font-medium">{item.weight}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base text-[#2C1810] font-bold mb-1.5 leading-snug">{item.name}</h3>
                <p className="text-[#6B4F3A] text-xs leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#D4681E] font-bold text-lg">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {navigate && <Footer navigate={navigate} />}
    </div>
  );
}
