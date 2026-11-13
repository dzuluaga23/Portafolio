import Reveal from '../../components/Reveal/Reveal'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import TechBadge from '../../components/TechBadge/TechBadge'
import { profile } from '../../data/profile'
import './About.css'

const FOCUS_AREAS = [
  { label: 'Frontend', detail: 'React · TypeScript · Next.js · Vite · TanStack Query' },
  { label: 'Backend', detail: '.NET 8 · Node.js · Python · REST API · GraphQL' },
  { label: 'Datos', detail: 'PostgreSQL · SQL Server · Entity Framework · Prisma · Drizzle' },
  { label: 'Arquitectura', detail: 'Clean Architecture · multi-tenant · microfrontends' },
  { label: 'Cloud & DevOps', detail: 'Vercel · AWS · Docker · CI/CD · GitHub Actions' },
  { label: 'Calidad', detail: 'Jest · React Testing Library · pytest · Code Reviews' },
]

const ABOUT_TECHNOLOGIES = [
  { name: 'React', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'C# / .NET 8', icon: 'dotnet' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Python', icon: 'python' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'SQL Server', icon: 'sqlserver' },
  { name: 'Docker', icon: 'docker' },
  { name: 'AWS', icon: 'aws' },
  { name: 'GraphQL', icon: 'graphql' },
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
