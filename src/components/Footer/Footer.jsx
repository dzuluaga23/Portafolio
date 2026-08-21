import { profile } from '../../data/profile'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__role mono">Software Developer</p>
        </div>

        <nav className="footer__links">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.cv.path} download={profile.cv.fileName}>CV</a>
        </nav>

        <p className="footer__copy mono">© {year} {profile.name}</p>
      </div>
    </footer>
  )
}