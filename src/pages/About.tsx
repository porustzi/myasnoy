import { Flame, Heart, Award, Users, Leaf, ChefHat } from 'lucide-react';
import Footer from '../components/Footer';
import type { Page } from '../App';

interface AboutProps {
  navigate: (page: Page) => void;
}

const values = [
  {
    icon: Flame,
    title: 'Живий вогонь',
    desc: "Кожна страва проходить через справжній мангальний вогонь. Ніяких газових плит — тільки деревне вугілля та відкрите полум'я.",
  },
  {
    icon: Heart,
    title: 'З душею',
    desc: "Ми готуємо з любов'ю до своєї справи. Кожен рецепт — це результат багаторічного досвіду та щирого бажання порадувати гостей.",
  },
  {
    icon: Award,
    title: 'Якість передусім',
    desc: "Відбірне м'ясо від перевірених фермерів, свіжі овочі та натуральні спеції — ніяких компромісів із якістю.",
  },
  {
    icon: Users,
    title: 'Тепла атмосфера',
    desc: "Мясний Роджер — це місце для людей. Де б'є живе серце — кухня, де кожного гостя зустрічають як свого.",
  },
  {
    icon: Leaf,
    title: 'Свіже та сезонне',
    desc: 'Меню змінюється разом із сезоном. Влітку — свіжі овочі гриль, взимку — ситні страви, що зігрівають душу.',
  },
  {
    icon: ChefHat,
    title: 'Авторські рецепти',
    desc: 'Наші соуси та маринади — це таємниця, яку ми передаємо з покоління в покоління. Спробуйте і самі все зрозумієте.',
  },
];

const team = [
  {
    name: 'Роджер',
    role: 'Власник та шеф-мангальщик',
    desc: "Понад 15 років у ресторанній справі. Особисто контролює якість кожного шматка м'яса та зустрічає постійних гостей.",
    img: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Василь',
    role: 'Старший кухар мангалу',
    desc: "10 років досвіду роботи на вугільному мангалі. Знає кожну м'язу та кожну точку жару.",
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Галина',
    role: 'Господиня залу',
    desc: 'Господиня зали та серце сервісу. Завдяки Галині кожен гість почувається як вдома.',
    img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function About({ navigate }: AboutProps) {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-72 sm:h-96 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Про нас"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/70" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <Flame size={14} className="text-[#E8863A]" />
            <span className="text-white/90 text-sm">Наша історія</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold mb-3">Про нас</h1>
          <p className="text-white/70 text-base max-w-md mx-auto">
            Пристрасть до м'яса, традиції та щира гостинність
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 md:py-28 bg-[#FBF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1028427/pexels-photo-1028427.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Мангал"
                className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-52 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
                <img
                  src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Вогонь"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-[#D4681E] font-semibold text-sm uppercase tracking-widest mb-3">З 2013 року</p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#2C1810] font-bold leading-snug mb-6">
                Легенда починається{' '}
                <span className="text-gradient">з першого шматка</span>
              </h2>
              <div className="space-y-5 text-[#4A3728] leading-relaxed">
                <p>
                  Все почалось у 2013 році, коли Роджер відкрив маленьке місце біля Дніпра з одним мангалом і великою мрією. Він хотів нагодувати Київ справжнім, чесним м'ясом — без хімії, без компромісів, з душею.
                </p>
                <p>
                  Перші гості приходили за порадами друзів. Потім за ними приходили їхні друзі. І дуже скоро черга коло воріт Мясного Роджера стала звичним явищем на вулиці Хрещатик.
                </p>
                <p>
                  Сьогодні ресторан — це затишний простір на 60 місць, де натуральне дерево, кам"яні елементи та запах мангалу створюють атмосферу, від якої не хочеться йти. Але суть залишилась та ж: найкраще м'ясо, живий вогонь і господар, який знає кожного гостя на ім"я.
                </p>
                <p>
                  <strong className="text-[#2C1810]">Наша місія</strong> — бути місцем, куди повертаються. Де сімейна вечеря перетворюється на спогад. Де м'ясо стає легендою.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D4681E] font-semibold text-sm uppercase tracking-widest mb-3">Що нами рухає</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#2C1810] font-bold mb-4">Наші цінності</h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-[#FBF5EC] hover:bg-[#F5E6D0] rounded-2xl p-7 transition-all duration-300 card-hover border border-[#EDD8BC]/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4681E] to-[#E8863A] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-orange-100">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-lg text-[#2C1810] font-bold mb-2">{title}</h3>
                <p className="text-[#6B4F3A] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-[#2C1810] relative overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <img
            src="https://images.pexels.com/photos/1028427/pexels-photo-1028427.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#E8863A] font-semibold text-sm uppercase tracking-widest mb-3">Люди за мангалом</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-4">Наша команда</h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map(member => (
              <div key={member.name} className="text-center group">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#E8863A]/40 group-hover:border-[#E8863A] transition-all duration-300 shadow-xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-white text-lg font-bold">{member.name}</h3>
                <div className="text-[#E8863A] text-xs font-medium uppercase tracking-wider mb-2">{member.role}</div>
                <p className="text-white/55 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FBF5EC]">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="font-display text-3xl sm:text-4xl text-[#2C1810] font-bold mb-4">
            Готові спробувати?
          </h2>
          <p className="text-[#4A3728] mb-8 leading-relaxed">
            Завітайте до нас і відчуйте атмосферу живого вогню, соковитого м'яса та щирої гостинності.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('contact')}
              className="px-8 py-3.5 rounded-lg btn-primary text-white font-semibold"
            >
              Забронювати столик
            </button>
            <button
              onClick={() => navigate('menu')}
              className="px-8 py-3.5 rounded-lg border-2 border-[#D4681E] text-[#D4681E] font-semibold hover:bg-[#D4681E] hover:text-white transition-all duration-200"
            >
              Переглянути меню
            </button>
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}
