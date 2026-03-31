-- ── CAMPO EMAIL EN JUGADORES (para vincular con la cuenta del jugador) ──
ALTER TABLE jugadores ADD COLUMN IF NOT EXISTS email_jugador TEXT DEFAULT '';

-- ── PLANES DE PARTIDO (el analista los crea, el jugador los ve) ──
CREATE TABLE IF NOT EXISTS planes_partido (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  jugador_id UUID NOT NULL,
  fecha TEXT,
  rival TEXT DEFAULT '',
  items JSONB DEFAULT '[]',
  notas TEXT DEFAULT '',
  created_at TIMESTAMP DEFAULT NOW()
);
ALTER TABLE planes_partido ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Acceso publico planes" ON planes_partido FOR ALL USING (true);

-- ── PSICOLOGÍA DIARIA (el jugador la rellena) ──
CREATE TABLE IF NOT EXISTS psico_diario (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  jugador_id UUID NOT NULL,
  fecha TEXT NOT NULL,
  mood INTEGER DEFAULT 0,
  energia INTEGER DEFAULT 5,
  estres INTEGER DEFAULT 5,
  mejor TEXT DEFAULT '',
  dificil TEXT DEFAULT '',
  mejorar_manana TEXT DEFAULT '',
  created_at TIMESTAMP DEFAULT NOW()
);
ALTER TABLE psico_diario ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Acceso publico psico" ON psico_diario FOR ALL USING (true);

-- ── LOG DE NUTRICIÓN (el jugador lo rellena) ──
CREATE TABLE IF NOT EXISTS nutricion_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  jugador_id UUID NOT NULL,
  fecha TEXT NOT NULL,
  texto TEXT DEFAULT '',
  created_at TIMESTAMP DEFAULT NOW()
);
ALTER TABLE nutricion_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Acceso publico nutricion" ON nutricion_log FOR ALL USING (true);

-- ── CLIPS DIRECTOS DEL JUGADOR (analista → jugador, tabla principal) ──
CREATE TABLE IF NOT EXISTS clips_jugador (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  jugador_id UUID NOT NULL,
  tipo TEXT DEFAULT 'mejorar',
  titulo TEXT DEFAULT '',
  url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
ALTER TABLE clips_jugador ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Acceso publico clips jugador" ON clips_jugador FOR ALL USING (true);
