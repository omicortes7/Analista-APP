# 🚀 Instalar en GitHub Pages (GRATIS, sin límites)

## Pasos en 10 minutos

### 1. Crear cuenta en GitHub
- Ve a **github.com** → Sign up → cuenta gratuita

### 2. Crear repositorio nuevo
- Pulsa el botón **+** (arriba derecha) → **New repository**
- Nombre: `analista-futbol` (o el que quieras)
- Visibilidad: **Public** (necesario para Pages gratis)
- Pulsa **Create repository**

### 3. Subir los archivos
Una vez creado el repositorio vacío, verás una pantalla con instrucciones.
Pulsa **uploading an existing file** y arrastra TODOS estos archivos:
```
index.html
jugador.html
404.html
.nojekyll
css/  (carpeta entera)
js/   (carpeta entera)
```

Pulsa **Commit changes** (botón verde abajo).

### 4. Activar GitHub Pages
- Ve a **Settings** (pestaña del repositorio)
- Menú izquierdo → **Pages**
- Source: **Deploy from a branch**
- Branch: **main** → carpeta **/ (root)**
- Pulsa **Save**

### 5. Tu URL en 2 minutos
```
https://TU-USUARIO.github.io/analista-futbol
```

GitHub te lo muestra en Settings → Pages una vez desplegado.

---

## ✅ Ventajas vs Netlify
- **Sin límite de bandwidth** para uso personal
- **Sin límite de builds** (cada vez que subas actualiza)
- **100% gratis** para siempre en repositorios públicos
- Los datos siguen en **Supabase** (no cambia nada)

## ⚠️ Notas
- El repositorio tiene que ser **Public** para Pages gratis
- Los datos de Supabase son privados aunque el código sea público
- Para actualizar la app: sube los archivos nuevos → automáticamente se despliega
