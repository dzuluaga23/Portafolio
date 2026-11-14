import Reveal from '../../components/Reveal/Reveal'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { FiBriefcase, FiBookOpen } from 'react-icons/fi'
import { experience, education } from '../../data/evolution'
import './Evolution.css'

function Timeline({ items }) {
  return (
    <ol className="evolution__list">
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i * 90} className="evolution__item">
          <span className="evolution__period mono">{item.period}</span>
          <div className="evolution__content">
            <h3 className="evolution__title">{item.title}</h3>
            <p className="evolution__place mono">{item.place}</p>
            <p className="evolution__desc">{item.description}</p>
            {item.highlights && item.highlights.length > 0 && (
              <ul className="evolution__highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="evolution__highlight">
                    <span className="evolution__highlight-dot" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </ol>
  )
}

export default function Evolution() {
  return (
    <section id="evolucion" className="section section--alt evolution">
      <div className="container">
        <SectionTitle
          index="04"
          eyebrow="Trayectoria"
          title="Industria y academia, en paralelo"
          description="Dos vías distintas que avanzan juntas: lo aprendido trabajando en productos reales y lo construido durante la formación. Los proyectos universitarios están en la sección de Proyectos."
        />

        <div className="evolution__columns">
          <Reveal className="evolution__column" delay={0}>
            <header className="evolution__column-head">
              <span className="evolution__column-icon"><FiBriefcase aria-hidden="true" /></span>
              <div>
                <h3 className="evolution__column-title">Experiencia laboral</h3>
                <p className="evolution__column-sub mono">Industria · producto real en producción</p>
              </div>
            </header>
            <Timeline items={experience} />
          </Reveal>

          <Reveal className="evolution__column" delay={90}>
            <header className="evolution__column-head">
              <span className="evolution__column-icon evolution__column-icon--edu"><FiBookOpen aria-hidden="true" /></span>
              <div>
                <h3 className="evolution__column-title">Formación académica</h3>
                <p className="evolution__column-sub mono">Universidad · proyectos y fundamentos</p>
              </div>
            </header>
            <Timeline items={education} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
