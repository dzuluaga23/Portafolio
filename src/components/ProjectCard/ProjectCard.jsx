import { FaGithub, FaGlobe, FaServer } from 'react-icons/fa'
import { FiArrowUpRight, FiCode, FiLayers, FiShield } from 'react-icons/fi'
import { SiDocker, SiDotnet, SiJsonwebtokens, SiNodedotjs, SiPostgresql, SiReact, SiRubyonrails } from 'react-icons/si'
import Button from '../Button/Button'
import './ProjectCard.css'

const ICONS = {
  app: <FaGlobe />,
  api: <FaServer />,
  code: <FaGithub />,
  frontend: <FiCode />,
  backend: <FaServer />,
}

const TECH_ICONS = {
  React: SiReact,
  'Vite': FiLayers,
  '.NET 8': SiDotnet,
  '.NET': SiDotnet,
  'ASP.NET Core': SiDotnet,
  'Node.js': SiNodedotjs,
  'Ruby on Rails': SiRubyonrails,
  PostgreSQL: SiPostgresql,
  JWT: SiJsonwebtokens,
  Docker: SiDocker,
  'REST API': FiArrowUpRight,
  'Clean Architecture': FiLayers,
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
  const { index, name, tagline, description, technologies, architecture, status, links, layout, demoCredentials } =
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
          <span className="project-card__demo-label"><FiShield /> Credenciales de demostración</span>
          <span>usuario: david23 · contraseña: micontra123</span>
        </div>
      )}

      <div className="project-card__links">
        {links.map((link) => (
          <Button
            key={link.label}
            href={link.href || undefined}
            target="_blank"
            rel="noopener noreferrer"
            variant={link.type === 'app' ? 'primary' : 'secondary'}
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
