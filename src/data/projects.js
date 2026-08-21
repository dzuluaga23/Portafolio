// Proyectos destacados del portfolio.
// Los proyectos en desarrollo muestran la arquitectura y stack planificados;
// los enlaces de código se habilitan cuando los repositorios estén disponibles.

export const projects = [
  {
    index: '01',
    slug: 'spa-vehiculos',
    name: 'SPA Vehículos',
    tagline: 'Plataforma web para gestión y administración vehicular',
    description:
      'Aplicación Full Stack orientada a la gestión de vehículos, usuarios y operaciones del negocio. El frontend consume una API REST propia y el backend está construido sobre .NET 8, con autenticación mediante JWT y una separación clara de responsabilidades para facilitar el mantenimiento y la evolución del sistema.',
    technologies: [
      'React',
      'Vite',
      '.NET 8',
      'ASP.NET Core',
      'Entity Framework Core',
      'SQL Server',
      'JWT',
      'REST API',
      'Swagger',
    ],
    architecture: ['React', 'REST API', '.NET 8', 'EF Core', 'SQL Server'],
    status: 'Desplegado',
    layout: 'standard',
    demoCredentials: {
      username: 'xxx',
      password: 'xxx',
    },
    links: [
      { label: 'Ver aplicación', href: 'https://spavehiculos.netlify.app/login', type: 'app' },
      { label: 'Ver backend', href: 'https://spavehiculos.runasp.net/', type: 'api' },
      { label: 'Código backend', href: 'https://github.com/dzuluaga23/SpaVehiculosBE', type: 'code' },
      { label: 'Código frontend', href: 'https://github.com/dzuluaga23/SpaVehiculosFE', type: 'code' },
    ],
  },
  {
    index: '02',
    slug: 'natillera',
    name: 'Natillera',
    tagline: 'Sistema para gestión de grupos, aportes y movimientos',
    description:
      'Aplicación Full Stack para administrar una natillera y centralizar la información de sus integrantes, aportes y movimientos. Cuenta con un frontend en React y una API REST desarrollada con .NET, con persistencia relacional y documentación de endpoints mediante Swagger.',
    technologies: [
      'React',
      'Vite',
      'C#',
      '.NET',
      'ASP.NET Core',
      'Entity Framework Core',
      'SQL Server',
      'REST API',
      'Swagger',
    ],
    architecture: ['React', 'REST API', 'ASP.NET Core', 'EF Core', 'SQL Server'],
    status: 'Desplegado',
    layout: 'standard',
    links: [
      { label: 'Ver aplicación', href: 'https://natillera-fe.vercel.app', type: 'app' },
      { label: 'Ver API', href: 'https://natilleradecember.runasp.net/swagger/index.html', type: 'api' },
      { label: 'Código backend', href: 'https://github.com/dzuluaga23/NatilleraBE', type: 'code' },
      { label: 'Código frontend', href: 'https://github.com/dzuluaga23/NatilleraFE', type: 'code' },
    ],
  },
  {
    index: '03',
    slug: 'teamflow',
    name: 'TeamFlow',
    tagline: 'Plataforma B2B de gestión de trabajo inspirada en Jira',
    description:
      'Proyecto en desarrollo enfocado en equipos y organizaciones que necesitan planificar, asignar y dar seguimiento a su trabajo. La solución está planteada como una plataforma B2B escalable, con autenticación segura, notificaciones, gestión de estado en el frontend y una infraestructura preparada para despliegue continuo en AWS.',
    technologies: [
      'React',
      'TanStack Query',
      'Node.js',
      'Clean Architecture',
      'JWT',
      'Docker',
      'AWS',
      'RDS',
      'CI/CD',
      'GitHub Actions',
    ],
    architecture: ['React', 'Node.js', 'Clean Architecture', 'RDS', 'AWS'],
    status: 'En desarrollo',
    layout: 'standard',
    links: [
      { label: 'Código frontend', href: '', type: 'code', disabled: true },
      { label: 'Código backend', href: '', type: 'code', disabled: true },
    ],
  },
  {
    index: '04',
    slug: 'history-devices',
    name: 'History Devices',
    tagline: 'Plataforma para historial y trazabilidad de dispositivos',
    description:
      'Proyecto en desarrollo pensado para centralizar el historial, cambios y trazabilidad de dispositivos a través de una aplicación web Full Stack. La solución combinará una interfaz moderna en React con un backend en Ruby on Rails, buscando una base sólida para crecer en funcionalidades, seguridad y gestión de información.',
    technologies: [
      'React',
      'JavaScript',
      'Ruby on Rails',
      'REST API',
      'PostgreSQL',
      'JWT',
      'Docker',
    ],
    architecture: ['React', 'REST API', 'Ruby on Rails', 'PostgreSQL'],
    status: 'En desarrollo',
    layout: 'standard',
    links: [
      { label: 'Código frontend', href: '', type: 'code', disabled: true },
      { label: 'Código backend', href: '', type: 'code', disabled: true },
    ],
  },
]
