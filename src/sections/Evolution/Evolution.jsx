import Reveal from '../../components/Reveal/Reveal'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { evolution } from '../../data/evolution'
import './Evolution.css'

export default function Evolution() {
  return (
    <section id="evolucion" className="section section--alt evolution">
      <div className="container">
        <SectionTitle
          index="04"
          eyebrow="Evolución"
          title="Mi camino como desarrollador"
          description="Todavía estoy construyendo mi trayectoria profesional. Así se ve hasta ahora."
        />

        <ol className="evolution__list">
          {evolution.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90} className="evolution__item">
              <span className="evolution__period mono">{item.period}</span>
              <div className="evolution__content">
                <h3 className="evolution__title">{item.title}</h3>
                <p className="evolution__place mono">{item.place}</p>
                <p className="evolution__desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}