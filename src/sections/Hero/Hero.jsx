import Button from '../../components/Button/Button'
import { profile } from '../../data/profile'
import './Hero.css'

const STACK_LINE = ['React', 'ASP.NET Core', 'SQL Server'].join(' · ')

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">
            <span className="hero__status-dot" /> Disponible para nuevos proyectos
          </span>

          <h1 className="hero__title">
            {profile.heroLead}{' '}
            <span className="hero__title-accent">{profile.heroName}</span>
          </h1>

          <p className="hero__role mono">{profile.heroSubtitle}</p>

          <p className="hero__text">{profile.heroText}</p>

          <div className="hero__actions">
            <Button as="a" href="#proyectos" variant="primary">
              Ver proyectos
            </Button>

            <Button
              as="a"
              href={profile.cv.path}
              download={profile.cv.fileName}
              variant="secondary"
            >
              Descargar CV
            </Button>

            <Button
              as="a"
              href={profile.cv.path}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              Ver CV ↗
            </Button>
          </div>

          <div className="hero__social">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              GitHub
            </a>

            <span className="hero__social-sep">/</span>

            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="hero__panel-window">
            <div className="hero__panel-bar">
              <span />
              <span />
              <span />
              <span className="hero__panel-title mono"></span>
            </div>

            <div className="hero__panel-body mono">
              <p>
                <span className="hero__prompt">$</span> whoami
              </p>

              <p className="hero__panel-output">
                david-zuluaga · full-stack developer
              </p>

              <p>
                <span className="hero__prompt">$</span> stack --active
              </p>

              <p className="hero__panel-output">
                {STACK_LINE}
              </p>

              <p>
                <span className="hero__prompt">$</span> status
              </p>

              <p className="hero__panel-output hero__panel-output--accent">
                construyendo proyectos reales
                <span className="hero__cursor" />
              </p>
            </div>
          </div>

          <div className="hero__panel-glow" />
        </div>
      </div>
    </section>
  )
}