import Reveal from '../../components/Reveal/Reveal'
import Button from '../../components/Button/Button'
import { profile } from '../../data/profile'
import './Contact.css'

export default function Contact() {
  const hasEmail = Boolean(profile.contact.email)

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <span className="eyebrow">05 — Contacto</span>
        <Reveal as="h2" className="contact__heading">
          {profile.contact.heading}
        </Reveal>
        <Reveal as="p" delay={80} className="contact__text">
          {profile.contact.text}
        </Reveal>

        <Reveal delay={140} className="contact__actions">
          {hasEmail ? (
            <Button as="a" href={`mailto:${profile.contact.email}`} variant="primary">
              Escríbeme
            </Button>
          ) : (
            <Button as="a" href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" variant="primary">
              Escríbeme por LinkedIn
            </Button>
          )}
          <Button as="a" href={profile.social.github} target="_blank" rel="noopener noreferrer" variant="secondary">
            GitHub
          </Button>
          <Button as="a" href={profile.cv.path} download variant="ghost">
            Descargar CV
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
