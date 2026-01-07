# Cabañas Dalas — Sitio web (plantilla)

Sitio estático, moderno y minimalista. Listo para subir a GitHub y desplegar en Netlify.

## 1) Edita lo básico
Abre `script.js` y cambia:
- `whatsappNumber`
- `whatsappMessage` (texto prellenado)

En `index.html` puedes cambiar el correo `reservas@cabanasdalas.com` por el que uses.

## 2) Cambiar fotos
Reemplaza los archivos en:
`/assets/gallery/`

Por defecto son placeholders `.svg`. Puedes poner `.jpg` o `.png` y luego actualizar las rutas en `index.html`:

Ejemplo:
```html
<img src="assets/gallery/piscina.jpg" ... />
```

Tip: 1200px de ancho o más, y comprimidas (mejor peso y carga).

## 3) Probar local
Solo abre `index.html` en tu navegador, o usa un servidor simple:

### Opción A (Python)
```bash
python -m http.server 8080
```
Luego abre: `http://localhost:8080`

### Opción B (VS Code)
Extensión “Live Server”.

## 4) Subir a GitHub
- Crea un repo nuevo
- Sube estos archivos
- Haz commit & push

## 5) Deploy en Netlify
- “Add new site” → “Import an existing project”
- Conecta tu repo
- Build command: (vacío)
- Publish directory: (vacío) o `/` (root)

### Formulario (Netlify Forms)
El formulario ya viene preparado. En Netlify:
- Deploy
- Luego ve a: Site → Forms (debería aparecer “contacto” después de la primera visita/envío).

---

Si me mandas 6–12 fotos reales (piscina, exteriores, habitación, cocina, quiosco/asador, hamacas, entrada), te lo dejo aún más fino: portada con foto, galería real, y un “tour” por secciones.
