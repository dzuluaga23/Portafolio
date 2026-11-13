import Reveal from '../../components/Reveal/Reveal'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
import './Projects.css'

const SPAN = { feature: 'span 12', standard: 'span 6', split: 'span 6' }

export default function Projects() {
  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <SectionTitle
          index="03"
          eyebrow="Proyectos"
          title="Productos desplegados en la nube"
          description="4 aplicaciones en producción que puedes probar ahora mismo, más un proyecto en camino. Cada una integra frontend, backend y base de datos propios — no son ejercicios aislados."
        />

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={i * 90}
              className="projects__reveal-wrap"
              style={{ gridColumn: SPAN[project.layout] ?? 'span 12' }}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
