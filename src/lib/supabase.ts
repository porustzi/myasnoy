import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Reservation {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}

export async function submitReservation(data: Reservation) {
  const { error } = await supabase.from('reservations').insert([data]);
  if (error) throw error;
}
