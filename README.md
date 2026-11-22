# Portafolio — David Zuluaga

Portafolio profesional construido en **React + Vite**, con datos de contenido
separados de los componentes para que puedas editarlo sin tocar el código de UI.

> 🌐 **Desplegado en producción:** [https://david-dev-six.vercel.app/](https://david-dev-six.vercel.app/)
> (deploy automático desde `main` en cada push)

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
| `src/data/profile.js` | Nombre, rol, texto del hero, métricas, "sobre mí", redes, correo, ruta del CV |
| `src/data/projects.js` | Los 6 proyectos: Traccia, Coply, SPA Vehículos, Natillera, TallerBot y TeamFlow |
| `src/data/technologies.js` | Stack por categoría (Frontend, Backend, Datos, Testing, Cloud & DevOps) |
| `src/data/evolution.js` | Tu camino: educación y experiencia real |
| `src/data/navigation.js` | Secciones del navbar y del indicador de scroll |

## Proyectos del portafolio

| Proyecto | Estado | Enlace |
|---|---|---|
| Traccia | Desplegado | [traccia-co.vercel.app](https://traccia-co.vercel.app) |
| Coply | Desplegado | [coply-co.vercel.app](https://coply-co.vercel.app) |
| AutoSpa — SPA Vehículos | Desplegado | [spavehiculos.netlify.app](https://spavehiculos.netlify.app/login) |
| Natillera | Desplegado | [natillera-fe.vercel.app](https://natillera-fe.vercel.app) |
| TallerBot (bot de Telegram) | Desplegado 24/7 | [@taller_vehicular_bot](https://t.me/taller_vehicular_bot) |
| TeamFlow | En desarrollo | — |

## Agregar una foto (opcional)

El Hero usa un panel visual tipo terminal en vez de una foto. Si prefieres
usar tu fotografía, colócala en `src/assets/images/profile.jpg` y reemplaza
el bloque `.hero__panel` en `src/sections/Hero/Hero.jsx` por una etiqueta
`<img>` que la importe.

## Credenciales de demo

Las cuentas de demostración (SPA Vehículos, Traccia) viven en la propiedad
`demoCredentials` de cada proyecto dentro de `src/data/projects.js`. No uses
credenciales reales sensibles ahí si el repositorio del portafolio es público.

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

Desplegado en **Vercel** con deploy automático: cualquier push a `main`
genera un deploy nuevo. Comando de build: `npm run build`, carpeta de
salida: `dist/`.
