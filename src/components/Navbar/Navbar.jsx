import { useEffect, useState } from 'react'
import { navigation } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useTheme } from '../../hooks/useTheme'
import './Navbar.css'

export default function Navbar({ activeId }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = navigation.filter((item) => item.id !== 'inicio')

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#inicio" className="navbar__brand">
          <span className="navbar__brand-mark">DZ</span>
          <span className="navbar__brand-name">{profile.name}</span>
        </a>

        <nav className="navbar__links" aria-label="Navegación principal">
          {links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar__link ${activeId === item.id ? 'is-active' : ''}`}
            >
              {item.navLabel}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
          title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
        >
          {theme === 'dark' ? '☀︎' : '☾'}
        </button>

        <button
          className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'is-open' : ''}`}
        aria-label="Navegación móvil"
      >
        {links.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`navbar__mobile-link ${activeId === item.id ? 'is-active' : ''}`}
            onClick={handleLinkClick}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <span className="mono">{item.index}</span> {item.navLabel}
          </a>
        ))}
      </nav>
    </header>
  )
}