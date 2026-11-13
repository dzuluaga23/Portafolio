import { FaGithub, FaGlobe, FaJsSquare, FaServer, FaTelegramPlane } from 'react-icons/fa'
import { FiArrowUpRight, FiCheckCircle, FiCode, FiDatabase, FiLayers, FiShield, FiBarChart2, FiUpload, FiSend, FiClock, FiBox } from 'react-icons/fi'
import {
  SiDocker, SiDotnet, SiExpress, SiJsonwebtokens, SiNodedotjs, SiPostgresql, SiPrisma, SiPython,
  SiReact, SiReactquery, SiReactrouter, SiNextdotjs, SiTailwindcss, SiTypescript, SiZod,
  SiBootstrap, SiSqlite, SiVite,
} from 'react-icons/si'
import Button from '../Button/Button'
import './ProjectCard.css'

const ICONS = {
  app: <FaGlobe />,
  api: <FaServer />,
  code: <FaGithub />,
  telegram: <FaTelegramPlane />,
  frontend: <FiCode />,
  backend: <FaServer />,
}

const TECH_ICONS = {
  React: SiReact,
  'React 19': SiReact,
  'React Router': SiReactrouter,
  Vite: SiVite,
  JavaScript: FaJsSquare,
  'Next.js 16': SiNextdotjs,
  TypeScript: SiTypescript,
  'Tailwind CSS 4': SiTailwindcss,
  Zod: SiZod,
  'C#': SiDotnet,
  '.NET 8': SiDotnet,
  '.NET Framework 4.8': SiDotnet,
  'ASP.NET Core': SiDotnet,
  'ASP.NET Web API': SiDotnet,
  'Entity Framework 6': SiDotnet,
  'Node.js': SiNodedotjs,
  'Express 5': SiExpress,
  'Prisma 7': SiPrisma,
  PostgreSQL: SiPostgresql,
  'Neon Postgres': SiPostgresql,
  SQLite: SiSqlite,
  JWT: SiJsonwebtokens,
  Docker: SiDocker,
  Python: SiPython,
  'python-telegram-bot': SiPython,
  'React Bootstrap': SiBootstrap,
  'TanStack Query': SiReactquery,
  'Drizzle ORM': FiDatabase,
  'Better Auth': FiShield,
  'Shadcn/ui': FiBox,
  Recharts: FiBarChart2,
  UploadThing: FiUpload,
  Resend: FiSend,
  'Vercel Cron': FiClock,
}

function TechChip({ name }) {
  const Icon = TECH_ICONS[name]
  return (
    <span className="project-card__chip">
      {Icon && <Icon aria-hidden="true" />}
      {name}
    </span>
  )
}

export default function ProjectCard({ project }) {
  const { index, name, tagline, description, highlights, technologies, architecture, status, links, layout, demoCredentials } =
    project

  const isInDevelopment = status === 'En desarrollo'

  return (
    <article className={`project-card project-card--${layout} ${isInDevelopment ? 'project-card--development' : ''}`}>
      <div className="project-card__head">
        <span className="project-card__index mono">{index}</span>
        <div className="project-card__heading">
          <div className="project-card__title-row">
            <h3 className="project-card__name">{name}</h3>
            {isInDevelopment && <FiLayers className="project-card__project-icon" aria-hidden="true" />}
          </div>
          <p className="project-card__tagline">{tagline}</p>
        </div>
        <span className={`project-card__status mono status--${status === 'Desplegado' ? 'live' : 'idle'}`}>
          <span className="project-card__status-dot" />
          {status}
        </span>
      </div>

      <p className="project-card__description">{description}</p>

      {highlights && highlights.length > 0 && (
        <ul className="project-card__highlights">
          {highlights.map((highlight) => (
            <li key={highlight} className="project-card__highlight">
              <FiCheckCircle aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {architecture && architecture.length > 0 && (
        <div className="project-card__architecture mono" aria-label="Arquitectura">
          <span className="project-card__architecture-label"><FiLayers /> Arquitectura</span>
          <div className="project-card__architecture-flow">
            {architecture.map((step, i) => (
              <span key={step} className="project-card__arch-step">
                {step}
                {i < architecture.length - 1 && <span className="project-card__arch-arrow">→</span>}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="project-card__stack" aria-label="Tecnologías">
        {technologies.map((technology) => (
          <TechChip key={technology} name={technology} />
        ))}
      </div>

      {demoCredentials && (
        <div className="project-card__demo mono">
          <span className="project-card__demo-label"><FiShield /> Cuenta de demostración</span>
          <span>
            {demoCredentials.username} · {demoCredentials.password}
          </span>
          {demoCredentials.note && <span className="project-card__demo-note">{demoCredentials.note}</span>}
        </div>
      )}

      <div className="project-card__links">
        {links.map((link) => (
          <Button
            key={link.label}
            href={link.href || undefined}
            target="_blank"
            rel="noopener noreferrer"
            variant={link.type === 'app' || link.type === 'telegram' ? 'primary' : 'secondary'}
            icon={ICONS[link.type] ?? <FiArrowUpRight />}
            disabled={link.disabled}
          >
            {link.label}
          </Button>
        ))}
      </div>
    </article>
  )
}
