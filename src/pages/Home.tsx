import { useEffect, useRef, useState } from 'react';
import { Flame, ChevronDown, Star, CheckCircle2, Award, Users, Beef, Leaf } from 'lucide-react';
import type { Page } from '../App';
import ReservationForm from '../components/ReservationForm';
import Img from '../components/Img';
import Footer from '../components/Footer';

interface HomeProps {
  navigate: (page: Page) => void;
}

const dishes = [
  {
    name: 'Шашлик із свинини',
    desc: 'Соковитий шашлик на живому вогні з авторським маринадом та спеціями',
    price: '280 грн',
    img: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Хіт',
  },
  {
    name: 'Люля-кебаб',
    desc: 'Ніжний фарш із яловичини та баранини, запечений на відкритому вогні',
    price: '260 грн',
    img: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Популярне',
  },
  {
    name: 'Колдуни',
    desc: "Традиційні картопляні котлети з м'ясною начинкою — домашній рецепт",
    price: '220 грн',
    img: 'https://images.pexels.com/photos/5718100/pexels-photo-5718100.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Традиційне',
  },
  {
    name: 'Овочі гриль',
    desc: 'Сезонні овочі, припечені на мангалі з оливковою олією та травами',
    price: '180 грн',
    img: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Веган',
  },
  {
    name: 'Авторські соуси',
    desc: 'Три фірмових соуси: гострий аджика, горіковий та часниковий з зеленню',
    price: '80 грн',
    img: 'https://images.pexels.com/photos/4552848/pexels-photo-4552848.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Фірмове',
  },
];

const advantages = [
  { icon: Beef, title: "Відбірне свіже м'ясо", desc: 'Постачаємо лише перевірені фермерські продукти щодня' },
  { icon: Flame, title: 'Живий вогонь', desc: 'Кожна страва готується на справжньому вугільному мангалі' },
  { icon: Award, title: 'Великі порції', desc: 'Ми не скупимось — ситні порції для справжнього задоволення' },
  { icon: Users, title: 'Ідеально для компаній', desc: 'Просторі столи, банкетний зал, дитячий куточок' },
  { icon: Leaf, title: 'Свіжі інгредієнти', desc: 'Сезонні овочі, зелень і спеції щодня зі своїх постачальників' },
  { icon: CheckCircle2, title: 'Затишна атмосфера', desc: 'Дерево, камінь і тепло — місце, куди хочеться повернутись' },
];

const reviews = [
  {
    name: 'Олена М.',
    rating: 5,
    text: 'Найкращий шашлик у Києві! Хазяїн сам зустрічає гостей і радить страви. Атмосфера просто казкова, повернемося обов\'язково.',
    date: 'Березень 2024',
  },
  {
    name: 'Михайло Г.',
    rating: 5,
    text: "М'ясо соковите, порції великі, ціни адекватні. Авторський соус — це взагалі щось особливе. Рекомендую всім!",
    date: 'Квітень 2024',
  },
  {
    name: 'Вікторія К.',
    rating: 5,
    text: 'Привели компанію на день народження, і всі були у захваті. Персонал уважний, страви прийшли швидко. Дякуємо!',
    date: 'Травень 2024',
  },
  {
    name: 'Андрій Б.',
    rating: 4,
    text: "Чудовий ресторан із правильною концепцією. Люля-кебаб просто тає в роті. Обов'язково замовте авторський соус.",
    date: 'Червень 2024',
  },
];

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Інтер\'єр ресторану',
    span: 'col-span-2 row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: "М'ясо на грилі",
    span: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Страви ресторану',
    span: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Гості ресторану',
    span: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Страви',
    span: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Атмосфера ресторану',
    span: 'col-span-1 row-span-1',
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Home({ navigate }: HomeProps) {
  const aboutSection = useInView();
  const dishesSection = useInView();
  const advantagesSection = useInView();
  const gallerySection = useInView();
  const reviewsSection = useInView();
  const reservationSection = useInView();

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Img
            src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Гриль та вогонь"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <Flame size={14} className="text-[#E8863A]" />
            <span className="text-white/90 text-sm tracking-wide">Київ, вул. Хрещатик 22</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-6 animate-fade-in-up">
            Місце, де м'ясо{' '}
            <span className="text-gradient">стає легендою</span>
          </h1>

          <p className="text-white/80 text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Соковитий шашлик, авторські соуси та атмосфера,{' '}
            <span className="text-white/95">до якої хочеться повертатися.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <button
              onClick={() => {
                document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-lg btn-primary text-white font-semibold text-base w-full sm:w-auto"
            >
              Забронювати столик
            </button>
            <button
              onClick={() => navigate('menu')}
              className="px-8 py-4 rounded-lg btn-outline text-white font-semibold text-base w-full sm:w-auto"
            >
              Переглянути меню
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 hero-stats animate-fade-in-up animate-delay-400">
            {[
              { value: '10+', label: 'Років досвіду' },
              { value: '50k+', label: 'Щасливих гостей' },
              { value: '4.9', label: 'Рейтинг Google' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#E8863A]">{value}</div>
                <div className="text-white/60 text-xs sm:text-sm mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={28} className="text-white/50" />
        </div>
      </section>

      {/* ABOUT */}
      <section
        ref={aboutSection.ref}
        className="py-20 md:py-28 bg-[#FBF5EC]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`transition-all duration-700 ${aboutSection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                <Img
                  src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ресторан Мясний Роджер"
                  className="w-full h-80 lg:h-[520px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                  <Img
                    src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Мангал"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#D4681E] to-[#E8863A] rounded-xl flex flex-col items-center justify-center shadow-lg hidden sm:flex">
                  <Flame size={28} className="text-white mb-0.5" />
                  <span className="text-white text-xs font-semibold text-center leading-tight">Живий<br/>вогонь</span>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-200 ${aboutSection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="section-divider mb-6" style={{ margin: '0 0 24px 0' }} />
              <p className="text-[#D4681E] font-semibold text-sm uppercase tracking-widest mb-3">Наша історія</p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#2C1810] font-bold leading-snug mb-6">
                Серце ресторану б'ється{' '}
                <span className="text-gradient">у кожному шматку м'яса</span>
              </h2>
              <div className="space-y-4 text-[#4A3728] leading-relaxed">
                <p>
                  Мясний Роджер — це більше ніж ресторан. Це місце, де сімейні традиції зустрічаються з пристрастю до справжньої кухні. З перших днів ми поставили за ціль одне: щоб кожен гість ішов додому ситим, щасливим і з бажанням повернутися.
                </p>
                <p>
                  Наш власник сам щодня контролює якість м'яса, особисто спілкується з постачальниками та гостями. Ми не шукаємо компромісів — тільки найсвіжіше, тільки живий вогонь, тільки щиросердне гостинне ставлення.
                </p>
                <p>
                  За роки роботи Мясний Роджер став місцем сімейних вечерь, дружніх зустрічей і незабутніх свят. Приходьте — і ви зрозумієте, чому наші гості стають постійними.
                </p>
              </div>
              <button
                onClick={() => navigate('about')}
                className="mt-8 inline-flex items-center gap-2 text-[#D4681E] font-semibold hover:gap-3 transition-all duration-200 group"
              >
                Дізнатись більше
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR DISHES */}
      <section
        ref={dishesSection.ref}
        className="py-20 md:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${dishesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#D4681E] font-semibold text-sm uppercase tracking-widest mb-3">Смакота з мангалу</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#2C1810] font-bold mb-4">Популярні страви</h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.map((dish, i) => (
              <div
                key={dish.name}
                className={`bg-[#FBF5EC] rounded-2xl overflow-hidden card-hover transition-all duration-700 ${dishesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <Img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-[#D4681E] to-[#E8863A] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {dish.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-lg text-[#2C1810] font-bold">{dish.name}</h3>
                    <span className="text-[#D4681E] font-bold text-base whitespace-nowrap">{dish.price}</span>
                  </div>
                  <p className="text-[#6B4F3A] text-sm leading-relaxed">{dish.desc}</p>
                </div>
              </div>
            ))}
            <div
              className={`sm:col-span-2 lg:col-span-0 lg:col-start-auto flex items-center justify-center transition-all duration-700 ${dishesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '500ms' }}
            >
            </div>
          </div>

          <div className={`text-center mt-10 transition-all duration-700 delay-500 ${dishesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <button
              onClick={() => navigate('menu')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg btn-primary text-white font-semibold"
            >
              Переглянути повне меню
            </button>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section
        ref={advantagesSection.ref}
        className="py-20 md:py-28 bg-[#2C1810] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Img
            src="https://images.pexels.com/photos/1028427/pexels-photo-1028427.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${advantagesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#E8863A] font-semibold text-sm uppercase tracking-widest mb-3">Чому обирають нас</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-4">Наші переваги</h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E8863A]/40 rounded-2xl p-6 transition-all duration-500 ${advantagesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4681E] to-[#E8863A] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-lg text-white font-bold mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        ref={gallerySection.ref}
        className="py-20 md:py-28 bg-[#FBF5EC]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${gallerySection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#D4681E] font-semibold text-sm uppercase tracking-widest mb-3">Наша атмосфера</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#2C1810] font-bold mb-4">Галерея</h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl group transition-all duration-700 ${i === 0 ? 'row-span-2' : ''} ${gallerySection.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${i * 80}ms`, aspectRatio: i === 0 ? undefined : '4/3' }}
              >
                <Img
                  src={img.url}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${i === 0 ? 'h-full min-h-[220px] sm:min-h-[320px] gallery-first' : 'h-full'}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        ref={reviewsSection.ref}
        className="py-20 md:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${reviewsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#D4681E] font-semibold text-sm uppercase tracking-widest mb-3">Відгуки гостей</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#2C1810] font-bold mb-4">Що кажуть наші гості</h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className={`bg-[#FBF5EC] rounded-2xl p-6 card-hover transition-all duration-700 ${reviewsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-[#E8863A] fill-[#E8863A]" />
                  ))}
                </div>
                <p className="text-[#4A3728] text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-[#2C1810] text-sm">{review.name}</div>
                  <div className="text-[#9B9589] text-xs">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section
        id="reservation"
        ref={reservationSection.ref}
        className="py-20 md:py-28 bg-[#FBF5EC]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`transition-all duration-700 ${reservationSection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-[#D4681E] font-semibold text-sm uppercase tracking-widest mb-3">Зустрінемось за столом</p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#2C1810] font-bold leading-snug mb-6">
                Забронюйте столик <span className="text-gradient">прямо зараз</span>
              </h2>
              <p className="text-[#4A3728] leading-relaxed mb-8">
                Заповніть форму, і ми зв'яжемось з вами для підтвердження. Великі компанії та корпоративні заходи — телефонуйте напряму.
              </p>
              <div className="space-y-3">
                {[
                  'Підтвердження протягом 30 хвилин',
                  'Можливість замовити стіл на терасі',
                  'Банкети та корпоративні заходи',
                  'Дитяче меню та високі стільці',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D4681E] to-[#E8863A] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={11} className="text-white" />
                    </div>
                    <span className="text-[#4A3728] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`bg-white rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-700 delay-200 ${reservationSection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}
