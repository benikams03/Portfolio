import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'

const links = [
    ['apropos', 'À propos'],
    ['experience', 'Expériences'],
    ['certificats', 'Certificats'],
    ['projets', 'Projets'],
]

export default function Top({ active, menuOpen, setMenuOpen }) {
    return (
        <header className="site-header">
            <div className="container nav-bar">
                <a href="#accueil" className="brand" aria-label="DevKams — accueil">
                    <span>dev</span>
                    <span>kams</span>
                    <i>.</i>
                </a>

                <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Navigation principale">
                    {links.map(([id, label]) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            aria-current={active === id ? 'location' : undefined}
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                    <a href="#Contact" className="nav-contact" onClick={() => setMenuOpen(false)}>
                        Parlons de votre projet <FiArrowUpRight />
                    </a>
                </nav>

                <button
                    className="menu-toggle"
                    aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </header>
    )
}
