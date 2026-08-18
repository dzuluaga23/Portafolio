import Button from '../Button/Button'
import './ProjectCard.css'

const ICONS = {
  app: '↗',
  api: '⌁',
  code: '</>',
}

export default function ProjectCard({ project }) {
  const { index, name, tagline, description, technologies, architecture, status, links, layout, demoCredentials } =
    project

  return (
    <article className={`project-card project-card--${layout}`}>
      <div className="project-card__head">
        <span className="project-card__index mono">{index}</span>
        <div>
          <h3 className="project-card__name">{name}</h3>
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
          {architecture.map((step, i) => (
            <span key={step} className="project-card__arch-step">
              {step}
              {i < architecture.length - 1 && <span className="project-card__arch-arrow">→</span>}
            </span>
          ))}
        </div>
      )}

      <div className="project-card__stack">
        {technologies.map((t) => (
          <span key={t} className="project-card__chip">{t}</span>
        ))}
      </div>

      {demoCredentials && (
        <div className="project-card__demo mono">
          <span className="project-card__demo-label">Credenciales de demostración</span>
          <span>usuario: david23 · contraseña: micontra123</span>
        </div>
      )}

      <div className="project-card__links">
        {links.map((link) => (
          <Button
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={ICONS[link.type] ?? '↗'}
          >
            {link.label}
          </Button>
        ))}
      </div>
    </article>
  )
}
