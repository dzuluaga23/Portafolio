import Reveal from '../../components/Reveal/Reveal'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
import './Projects.css'

const SPAN = { feature: 'span 12', standard: 'span 7', split: 'span 5' }

export default function Projects() {
  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <SectionTitle
          index="03"
          eyebrow="Proyectos"
          title="Productos que he construido"
          description="Cada proyecto integra frontend, backend y base de datos propios. No son ejercicios aislados: son aplicaciones desplegadas de punta a punta."
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
