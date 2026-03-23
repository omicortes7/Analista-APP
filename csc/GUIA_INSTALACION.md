# GUÍA DE INSTALACIÓN
## Panel de Analista · Omar Cortés Ferrero

---

## LO QUE VAS A TENER

Una app web accesible desde cualquier dispositivo con URL propia.
Datos guardados en la nube. Funciona en móvil, tablet y ordenador.

**Tiempo total estimado: 15 minutos**
**Coste: 0€**

---

## PASO 1 · Crear cuenta en Supabase (base de datos)

1. Ve a https://supabase.com
2. Pulsa "Start your project" → "Sign up"
3. Regístrate con tu email
4. Pulsa "New project"
5. Rellena:
   - Name: `omar-analista`
   - Database Password: (guárdala, la necesitarás)
   - Region: West EU (Ireland)
6. Pulsa "Create new project" y espera 2 minutos

**Crear las tablas:**
7. En el menú izquierdo → "SQL Editor" → "New query"
8. Abre el archivo `supabase_setup.sql` de esta carpeta
9. Copia todo su contenido y pégalo en el editor
10. Pulsa "Run" (botón verde)
11. Debes ver "Success. No rows returned"

**Copiar tus credenciales:**
12. En el menú izquierdo → "Project Settings" → "API"
13. Copia:
    - "Project URL" (algo como https://xxxxx.supabase.co)
    - "anon public" key (la clave larga)

---

## PASO 2 · Configurar la app con tus credenciales

1. Abre el archivo `js/app.js` con cualquier editor de texto
2. Busca las líneas al principio:
   ```
   const SUPABASE_URL = 'TU_SUPABASE_URL';
   const SUPABASE_KEY = 'TU_SUPABASE_ANON_KEY';
   ```
3. Reemplaza `TU_SUPABASE_URL` con tu Project URL
4. Reemplaza `TU_SUPABASE_ANON_KEY` con tu anon key
5. Guarda el archivo

---

## PASO 3 · Publicar en Netlify (hosting gratuito)

**Opción A — Arrastrar y soltar (más fácil):**
1. Ve a https://netlify.com
2. Regístrate gratis
3. En el Dashboard → "Add new site" → "Deploy manually"
4. Arrastra la carpeta `omar-analista` entera al área que indica
5. Espera 30 segundos
6. Netlify te dará una URL como `random-name-123.netlify.app`

**Opción B — Cambiar el nombre de tu URL:**
1. En Netlify → Site settings → General → "Change site name"
2. Escribe `omar-analista` o similar
3. Tu URL será `omar-analista.netlify.app`

---

## PASO 4 · Verificar que funciona

1. Abre tu URL en el navegador
2. Debes ver el Panel de Analista con el saludo
3. Prueba a añadir un jugador
4. Abre la misma URL en el móvil → los datos deben estar sincronizados

---

## ACTUALIZAR LA APP EN EL FUTURO

Si quieres añadir cambios:
1. Modifica los archivos localmente
2. Ve a Netlify → Deploys → "Drag and drop"
3. Arrastra la carpeta de nuevo
4. Los datos en Supabase no se tocan, solo cambia el frontend

---

## SOLUCIÓN DE PROBLEMAS

**La app carga pero no muestra datos:**
→ Revisa que copiaste bien las credenciales de Supabase en app.js
→ Comprueba que ejecutaste el SQL de supabase_setup.sql

**Error "Failed to fetch":**
→ Las credenciales de Supabase son incorrectas. Vuelve al paso 2.

**Los datos no se guardan:**
→ En Supabase → Authentication → Policies. Verifica que existen las políticas de acceso público.

---

## ESTRUCTURA DE ARCHIVOS

```
omar-analista/
├── index.html          ← App principal
├── css/
│   └── style.css       ← Estilos
├── js/
│   └── app.js          ← Toda la lógica
└── supabase_setup.sql  ← SQL para crear las tablas (solo se usa una vez)
```

---

## EXPORTAR TUS DATOS

En cualquier momento puedes pulsar "Exportar datos" en la barra lateral.
Se descargará un archivo JSON con todos tus jugadores, objetivos,
observaciones y microconceptos. Guárdalo como copia de seguridad.

---

**Cualquier duda, vuelve al chat y te ayudo.**
