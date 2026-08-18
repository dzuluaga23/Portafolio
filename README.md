# Portafolio — David Zuluaga

Portafolio profesional construido en **React + Vite**, con datos de contenido
separados de los componentes para que puedas editarlo sin tocar el código de UI.

## Empezar

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
npm run preview
```

## Dónde editar contenido

Todo el contenido real vive en `src/data/`, no en los componentes:

| Archivo | Qué contiene |
|---|---|
| `src/data/profile.js` | Nombre, rol, texto del hero, "sobre mí", redes, correo, ruta del CV |
| `src/data/projects.js` | Natillera, SPA Vehículos, MiSalud — agrega o edita proyectos aquí |
| `src/data/technologies.js` | Stack por categoría (Backend, Frontend, Database, Tools) |
| `src/data/evolution.js` | Tu camino: educación y experiencia real |
| `src/data/navigation.js` | Secciones del navbar y del indicador de scroll |

## Agregar tu CV

1. Coloca el PDF en `public/cv/David-Zuluaga-CV.pdf` (el nombre debe coincidir
   con `profile.cv.path` en `src/data/profile.js`).
2. Los botones "Descargar CV" y "Ver CV" del Hero detectan automáticamente si
   el archivo existe: si no está, aparecen deshabilitados sin romper la página.

## Agregar tu correo

Edita `profile.contact.email` en `src/data/profile.js`. Mientras esté vacío,
la sección de Contacto usa LinkedIn como canal principal.

## Agregar una foto (opcional)

El Hero usa un panel visual tipo terminal en vez de una foto. Si prefieres
usar tu fotografía, colócala en `src/assets/images/profile.png` y reemplaza
el bloque `.hero__panel` en `src/sections/Hero/Hero.jsx` por una etiqueta
`<img>` que la importe.

## Credenciales de demo (SPA Vehículos)

Edita `demoCredentials` dentro del proyecto `spa-vehiculos` en
`src/data/projects.js`. No uses credenciales reales sensibles ahí si el
repositorio del portafolio es público.

## Estructura

```
src/
├── assets/            imágenes propias (opcional)
├── components/        piezas reutilizables (Navbar, Button, ProjectCard...)
├── sections/           una carpeta por sección de la página
├── data/               todo el contenido editable
├── hooks/              useActiveSection (navbar + indicador de scroll)
├── pages/Home.jsx      ensambla las secciones
└── App.jsx
```

## Despliegue

Cualquier host de estáticos funciona (Vercel, Netlify). Comando de build:
`npm run build`, carpeta de salida: `dist/`.
