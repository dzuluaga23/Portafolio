import Reveal from '../../components/Reveal/Reveal'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { profile } from '../../data/profile'
import './About.css'

const FOCUS_AREAS = [
  { label: 'Backend', detail: 'APIs REST con ASP.NET Core' },
  { label: 'Full Stack', detail: 'De la base de datos a la interfaz' },
  { label: 'Bases de datos', detail: 'Modelado en SQL Server' },
  { label: 'Arquitectura', detail: 'Diseño de soluciones mantenibles' },
]

export default function About() {
  return (
    <section id="sobre-mi" className="section about">
      <div className="container">
        <SectionTitle index="01" eyebrow="Sobre mí" title="Cómo pienso el desarrollo de software" />

        <div className="about__grid">
          <Reveal as="p" className="about__text">
            {profile.about}
          </Reveal>

          <div className="about__focus">
            {FOCUS_AREAS.map((area, i) => (
              <Reveal key={area.label} delay={i * 80} className="about__focus-item">
                <span className="about__focus-label mono">{area.label}</span>
                <span className="about__focus-detail">{area.detail}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
