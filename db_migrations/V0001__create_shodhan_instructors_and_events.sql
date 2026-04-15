
CREATE TABLE IF NOT EXISTS shodhan_instructors (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  city TEXT NOT NULL,
  bio TEXT DEFAULT '',
  photo_url TEXT DEFAULT '',
  session_token TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS shodhan_events (
  id SERIAL PRIMARY KEY,
  instructor_id INTEGER NOT NULL REFERENCES shodhan_instructors(id),
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  event_date DATE NOT NULL,
  event_time TEXT NOT NULL,
  location TEXT NOT NULL,
  city TEXT NOT NULL,
  price TEXT DEFAULT 'Бесплатно',
  spots INTEGER DEFAULT 0,
  contact_link TEXT DEFAULT '',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_shodhan_events_date ON shodhan_events(event_date);
CREATE INDEX IF NOT EXISTS idx_shodhan_events_instructor ON shodhan_events(instructor_id);
