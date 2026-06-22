/*
# Create reservations table for Мясний Роджер restaurant

1. New Tables
- `reservations`
  - `id` (uuid, primary key)
  - `name` (text, not null) - guest name
  - `phone` (text, not null) - contact phone
  - `date` (date, not null) - reservation date
  - `time` (text, not null) - reservation time slot
  - `guests` (integer, not null) - number of guests
  - `created_at` (timestamptz) - submission timestamp

2. Security
- Enable RLS on `reservations`.
- Allow anon + authenticated users to INSERT (public booking form).
- No public SELECT (only admin should view).
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  guests integer NOT NULL DEFAULT 2,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations" ON reservations FOR INSERT
TO anon, authenticated WITH CHECK (true);
