import Reveal from '../../components/Reveal/Reveal'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import TechBadge from '../../components/TechBadge/TechBadge'
import { profile } from '../../data/profile'
import './About.css'

const FOCUS_AREAS = [
  { label: 'Frontend', detail: 'React · JavaScript · Vite · TanStack Query' },
  { label: 'Backend', detail: '.NET 8 · Node.js · Ruby on Rails · REST API' },
  { label: 'Datos', detail: 'SQL Server · PostgreSQL · Entity Framework Core' },
  { label: 'Arquitectura', detail: 'Clean Architecture · APIs · separación de responsabilidades' },
  { label: 'Cloud & DevOps', detail: 'AWS · Docker · CI/CD · GitHub Actions' },
  { label: 'Seguridad', detail: 'JWT · autenticación · autorización · buenas prácticas' },
]

const ABOUT_TECHNOLOGIES = [
  { name: 'React', icon: 'react' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'C# / .NET 8', icon: 'dotnet' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Ruby on Rails', icon: 'rails' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'SQL Server', icon: 'sqlserver' },
  { name: 'Docker', icon: 'docker' },
  { name: 'AWS', icon: 'aws' },
  { name: 'JWT', icon: 'jwt' },
  { name: 'GitHub Actions', icon: 'githubactions' },
  { name: 'REST API', icon: 'restapi' },
]

export default function About() {
  return (
    <section id="sobre-mi" className="section section--alt about">
      <div className="container">
        <SectionTitle index="01" eyebrow="Sobre mí" title="Cómo pienso y construyo software" />

        <div className="about__grid">
          <div className="about__main">
            <Reveal as="p" className="about__text">
              {profile.about}
            </Reveal>
          </div>

          <div className="about__focus">
            {FOCUS_AREAS.map((area, i) => (
              <Reveal key={area.label} delay={i * 60} className="about__focus-item">
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
