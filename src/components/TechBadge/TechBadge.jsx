import {
  FaCode,
  FaCss3Alt,
  FaCogs,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaNodeJs,
  FaExchangeAlt,
  FaDocker,
  FaFigma,
  FaAws,
  FaMicrosoft,
} from 'react-icons/fa'
import {
  SiGraphql,
  SiPostman,
  SiDotnet,
  SiSwagger,
  SiVite,
  SiBootstrap,
  SiPostgresql,
  SiMongodb,
  SiMui,
  SiJira,
  SiRubyonrails,
  SiJsonwebtokens,
  SiGithubactions,
  SiReactquery,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiExpress,
  SiPython,
  SiJest,
  SiTestinglibrary,
  SiRedux,
  SiSqlite,
  SiStorybook,
} from 'react-icons/si'
import { DiMysql } from 'react-icons/di'
import { TbDatabase } from 'react-icons/tb'

import './TechBadge.css'

const icons = {
  csharp: { component: FaCode, color: '#68217A' },
  dotnet: { component: SiDotnet, color: '#512BD4' },
  entityframework: { component: FaCogs, color: '#6C2DC7' },
  nodejs: { component: FaNodeJs, color: '#339933' },
  restapi: { component: FaExchangeAlt, color: '#3B82F6' },
  react: { component: FaReact, color: '#61DAFB' },
  javascript: { component: FaJsSquare, color: '#F7DF1E' },
  html: { component: FaHtml5, color: '#E34F26' },
  css: { component: FaCss3Alt, color: '#1572B6' },
  vite: { component: SiVite, color: '#646CFF' },
  bootstrap: { component: SiBootstrap, color: '#7952B3' },
  mui: { component: SiMui, color: '#007FFF' },
  sqlserver: { component: TbDatabase, color: '#CC2927' },
  postgresql: { component: SiPostgresql, color: '#4169E1' },
  mongodb: { component: SiMongodb, color: '#47A248' },
  mysql: { component: DiMysql, color: '#00758F' },
  graphql: { component: SiGraphql, color: '#E10098' },
  git: { component: FaGitAlt, color: '#F05032' },
  github: { component: FaGithub, color: '#181717' },
  vscode: { component: FaCode, color: '#007ACC' },
  postman: { component: SiPostman, color: '#FF6C37' },
  linux: { component: FaLinux, color: '#181717' },
  docker: { component: FaDocker, color: '#2496ED' },
  jira: { component: SiJira, color: '#0052CC' },
  figma: { component: FaFigma, color: '#F24E1E' },
  aws: { component: FaAws, color: '#FF9900' },
  swagger: { component: SiSwagger, color: '#85EA2D' },
  rails: { component: SiRubyonrails, color: '#CC0000' },
  jwt: { component: SiJsonwebtokens, color: '#111111' },
  githubactions: { component: SiGithubactions, color: '#2088FF' },
  tanstack: { component: SiReactquery, color: '#FF4154' },
  architecture: { component: FaCogs, color: '#6C2DC7' },
  typescript: { component: SiTypescript, color: '#3178C6' },
  nextjs: { component: SiNextdotjs, color: '#000000' },
  tailwind: { component: SiTailwindcss, color: '#06B6D4' },
  drizzle: { component: TbDatabase, color: '#A8C420' },
  prisma: { component: SiPrisma, color: '#2D3748' },
  express: { component: SiExpress, color: '#444444' },
  python: { component: SiPython, color: '#3776AB' },
  jest: { component: SiJest, color: '#C21325' },
  testinglibrary: { component: SiTestinglibrary, color: '#E33332' },
  redux: { component: SiRedux, color: '#764ABC' },
  sqlite: { component: SiSqlite, color: '#003B57' },
  azuredevops: { component: FaMicrosoft, color: '#0078D4' },
  storybook: { component: SiStorybook, color: '#FF4785' },
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