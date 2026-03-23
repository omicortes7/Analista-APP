-- =============================================
-- EJECUTA ESTE SQL EN EL EDITOR DE SUPABASE
-- Dashboard → SQL Editor → New Query → Pega esto → Run
-- =============================================

-- Tabla de jugadores
CREATE TABLE jugadores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  posicion TEXT NOT NULL,
  equipo TEXT,
  categoria TEXT,
  sesion_fecha DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de objetivos de cada jugador
CREATE TABLE objetivos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  jugador_id UUID REFERENCES jugadores(id) ON DELETE CASCADE,
  texto TEXT NOT NULL,
  fase TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de observaciones de partidos
CREATE TABLE observaciones (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  jugador_id UUID REFERENCES jugadores(id) ON DELETE CASCADE,
  partido TEXT NOT NULL,
  fecha DATE NOT NULL,
  texto TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de notas de sesiones de vídeo
CREATE TABLE notas_video (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  jugador_id UUID REFERENCES jugadores(id) ON DELETE CASCADE,
  fecha DATE NOT NULL,
  texto TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de microconceptos
CREATE TABLE microconceptos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  descripcion TEXT DEFAULT '',
  posicion TEXT NOT NULL,
  fase TEXT NOT NULL,
  referencia TEXT DEFAULT '',
  video_url TEXT DEFAULT '',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Activar acceso público (sin login por ahora)
ALTER TABLE jugadores ENABLE ROW LEVEL SECURITY;
ALTER TABLE objetivos ENABLE ROW LEVEL SECURITY;
ALTER TABLE observaciones ENABLE ROW LEVEL SECURITY;
ALTER TABLE notas_video ENABLE ROW LEVEL SECURITY;
ALTER TABLE microconceptos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Acceso público" ON jugadores FOR ALL USING (true);
CREATE POLICY "Acceso público" ON objetivos FOR ALL USING (true);
CREATE POLICY "Acceso público" ON observaciones FOR ALL USING (true);
CREATE POLICY "Acceso público" ON notas_video FOR ALL USING (true);
CREATE POLICY "Acceso público" ON microconceptos FOR ALL USING (true);

-- Añadir foto del jugador (base64 o URL)
ALTER TABLE jugadores ADD COLUMN IF NOT EXISTS foto_jugador TEXT DEFAULT '';
