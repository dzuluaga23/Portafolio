import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaCogs,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaCodeBranch,
  FaTools,
} from 'react-icons/fa'

import './TechBadge.css'

const icons = {
  csharp: { component: FaCode, color: '#68217A' },
  dotnet: { component: FaCodeBranch, color: '#512BD4' },
  entityframework: { component: FaCogs, color: '#6C2DC7' },
  react: { component: FaReact, color: '#61DAFB' },
  javascript: { component: FaJsSquare, color: '#F7DF1E' },
  html: { component: FaHtml5, color: '#E34F26' },
  css: { component: FaCss3Alt, color: '#1572B6' },
  vite: { component: FaTools, color: '#646CFF' },
  bootstrap: { component: FaCode, color: '#7952B3' },
  sqlserver: { component: FaDatabase, color: '#CC2927' },
  postgresql: { component: FaDatabase, color: '#4169E1' },
  mongodb: { component: FaDatabase, color: '#47A248' },
  mysql: { component: FaDatabase, color: '#4479A1' },
  git: { component: FaGitAlt, color: '#F05032' },
  github: { component: FaGithub, color: '#181717' },
  vscode: { component: FaCode, color: '#007ACC' },
  postman: { component: FaTools, color: '#FF6C37' },
  linux: { component: FaLinux, color: '#181717' },
}

export default function TechBadge({ name, description, icon }) {
  const tech = icons[icon]
  const Icon = tech?.component

  return (
    <div className="tech-badge" tabIndex={0}>
      <span
        className="tech-badge__icon"
        aria-hidden="true"
        style={{ color: tech?.color }}
      >
        {Icon && <Icon />}
      </span>

      <span className="tech-badge__name">
        {name}
      </span>

      {description && (
        <span className="tech-badge__tooltip">
          {description}
        </span>
      )}
    </div>
  )
}