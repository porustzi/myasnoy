import { useState } from 'react';
import { submitReservation } from '../lib/supabase';
import { Calendar, Clock, Users, User, Phone, CheckCircle, AlertCircle } from 'lucide-react';

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30',
  ];

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      setErrorMsg('Будь ласка, заповніть усі обов\'язкові поля.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      await submitReservation({
        name: form.name,
        phone: form.phone,
        date: form.date,
        time: form.time,
        guests: parseInt(form.guests, 10),
      });
      setStatus('success');
      setForm({ name: '', phone: '', date: '', time: '', guests: '2' });
    } catch {
      setErrorMsg('Щось пішло не так. Спробуйте ще раз або зателефонуйте нам.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="font-display text-2xl text-[#2C1810] mb-2">Бронювання прийнято!</h3>
        <p className="text-[#8B5E3C] mb-6">Ми зв'яжемось з вами найближчим часом для підтвердження.</p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-2 rounded-md btn-primary text-white text-sm font-semibold"
        >
          Нове бронювання
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#2C1810] mb-1.5">
            Ваше ім'я *
          </label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5E3C]" />
            <input
              type="text"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              placeholder="Іван Петренко"
              className="w-full pl-9 pr-4 py-3 rounded-lg border border-[#D4B896] bg-white text-[#2C1810] placeholder-[#B89880] text-sm transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2C1810] mb-1.5">
            Телефон *
          </label>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5E3C]" />
            <input
              type="tel"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              placeholder="+380 XX XXX XX XX"
              className="w-full pl-9 pr-4 py-3 rounded-lg border border-[#D4B896] bg-white text-[#2C1810] placeholder-[#B89880] text-sm transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#2C1810] mb-1.5">
            Дата *
          </label>
          <div className="relative">
            <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5E3C]" />
            <input
              type="date"
              min={today}
              value={form.date}
              onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
              className="w-full pl-9 pr-4 py-3 rounded-lg border border-[#D4B896] bg-white text-[#2C1810] text-sm transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2C1810] mb-1.5">
            Час *
          </label>
          <div className="relative">
            <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5E3C]" />
            <select
              value={form.time}
              onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
              className="w-full pl-9 pr-4 py-3 rounded-lg border border-[#D4B896] bg-white text-[#2C1810] text-sm transition-colors appearance-none"
            >
              <option value="">Оберіть</option>
              {timeSlots.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2C1810] mb-1.5">
            Гостей
          </label>
          <div className="relative">
            <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5E3C]" />
            <select
              value={form.guests}
              onChange={e => setForm(f => ({ ...f, guests: e.target.value }))}
              className="w-full pl-9 pr-4 py-3 rounded-lg border border-[#D4B896] bg-white text-[#2C1810] text-sm transition-colors appearance-none"
            >
              {[1,2,3,4,5,6,7,8,10,12,15,20].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'гість' : n < 5 ? 'гості' : 'гостей'}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
          <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
          <span className="text-sm text-red-700">{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 rounded-lg btn-primary text-white font-semibold text-base disabled:opacity-60 disabled:cursor-not-allowed transition-all"
      >
        {status === 'loading' ? 'Відправляємо...' : 'Забронювати столик'}
      </button>
    </form>
  );
}
