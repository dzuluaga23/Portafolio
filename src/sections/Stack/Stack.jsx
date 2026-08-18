import Reveal from '../../components/Reveal/Reveal'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import TechBadge from '../../components/TechBadge/TechBadge'
import { technologies } from '../../data/technologies'
import './Stack.css'

export default function Stack() {
  return (
    <section id="stack" className="section stack">
      <div className="container">
        <SectionTitle
          index="02"
          eyebrow="Stack"
          title="Con qué construyo"
          description="Tecnologías que uso de forma activa en mis proyectos. Pasa el cursor sobre cada una para más contexto."
        />

        <div className="stack__categories">
          {technologies.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 60} className="stack__category">
              <h3 className="stack__category-title mono">{group.category}</h3>
              <div className="stack__badges">
                {group.items.map((tech) => (
                  <TechBadge key={tech.name} {...tech} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
