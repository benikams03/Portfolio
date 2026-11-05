import { FiArrowUpRight } from 'react-icons/fi'
import { socials } from '../../data/socials.js'

export default function Bottom() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <a className="brand" href="#accueil">dev<span>kams</span><i>.</i></a>
                <p>© {new Date().getFullYear()} Beni Mukungulu. Tous droits réservés.</p>
                <div className="social-links">
                    {socials.map(([Icon, name, href]) => (
                        <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}>
                            <Icon />
                        </a>
                    ))}
                </div>
                <a className="back-top" href="#accueil">Retour en haut <FiArrowUpRight /></a>
            </div>
        </footer>
    )
}
