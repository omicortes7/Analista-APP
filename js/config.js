// =============================================
// CONFIGURACIÓN DE SUPABASE
// Rellena estos valores después de crear tu cuenta
// en https://supabase.com
// =============================================

const SUPABASE_URL = 'TU_SUPABASE_URL_AQUI';
const SUPABASE_KEY = 'TU_SUPABASE_ANON_KEY_AQUI';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export { supabase };
