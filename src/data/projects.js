// Cada proyecto es real. Para agregar/editar un proyecto solo modifica este archivo:
// los componentes de la sección "Proyectos" leen esta estructura directamente.
//
// layout: controla cómo se presenta la tarjeta en la grilla (ver Projects.jsx)
//   'feature' → proyecto principal, grande
//   'standard' → proyecto secundario
//   'split'    → proyecto dividido en Frontend / Backend

export const projects = [
  {
    index: '01',
    slug: 'natillera',
    name: 'Natillera',
    tagline: 'Gestión web de una natillera',
    description:
      'Aplicación web para la gestión de una natillera: administración de la información del grupo a través de una API REST propia.',
    technologies: ['React', 'Vite', 'C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'REST API'],
    architecture: ['React', 'REST API', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server'],
    status: 'Desplegado',
    layout: 'feature',
    links: [
      { label: 'Ver aplicación', href: 'https://natillera-fe.vercel.app', type: 'app' },
      { label: 'Ver API', href: 'https://natilleradecember.runasp.net/swagger/index.html', type: 'api' },
      { label: 'Ver código', href: 'https://github.com/dzuluaga23/NatilleraBE', type: 'code' },
    ],
  },
  {
    index: '02',
    slug: 'spa-vehiculos',
    name: 'SPA Vehículos',
    tagline: 'Aplicación web para gestión vehicular',
    description:
      'Single Page Application con backend propio, desplegada de forma independiente en frontend y backend.',
    technologies: ['React', 'REST API'],
    architecture: ['React', 'REST API', 'Backend'],
    status: 'Desplegado',
    layout: 'standard',
    demoCredentials: {
      username: 'xxx',
      password: 'xxx',
    },
    links: [
      { label: 'Ver aplicación', href: 'https://spavehiculos.netlify.app/login', type: 'app' },
      { label: 'Ver backend', href: 'https://spavehiculos.runasp.net/', type: 'api' },
    ],
  },
  {
    index: '03',
    slug: 'misalud',
    name: 'MiSalud',
    tagline: 'Proyecto Full Stack separado en Frontend y Backend',
    description:
      'Proyecto Full Stack organizado en dos repositorios independientes: frontend y backend.',
    technologies: ['React', 'C#', 'ASP.NET Core'],
    architecture: ['Frontend (React)', 'Backend (ASP.NET Core)'],
    status: 'En repositorio',
    layout: 'split',
    links: [
      { label: 'Frontend', href: 'https://github.com/dzuluaga23/MiSaludFE', type: 'code' },
      { label: 'Backend', href: 'https://github.com/dzuluaga23/MiSaludBE', type: 'code' },
    ],
  },
]
