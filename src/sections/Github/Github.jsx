import Reveal from '../../components/Reveal/Reveal'
import Button from '../../components/Button/Button'
import { profile } from '../../data/profile'
import './Github.css'

export default function Github() {
  return (
    <section className="section github">
      <div className="container">
        <Reveal className="github__panel">
          <div>
            <span className="eyebrow">Código</span>
            <h2 className="github__title">El código detrás de cada proyecto vive en GitHub</h2>
            <p className="github__text">
              Ahí puedes revisar los repositorios de Natillera, SPA Vehículos y otros
              proyectos en los que sigo trabajando.
            </p>
          </div>
          <Button as="a" href={profile.social.github} target="_blank" rel="noopener noreferrer" variant="primary">
            Ver GitHub ↗
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
