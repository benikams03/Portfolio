import { FiArrowUpRight, FiArrowDown, FiDownload, FiCode } from 'react-icons/fi'
import portrait from '../../assets/photos/Sans titre-1.jpg'
import { socials } from '../../data/socials.js'

export default function Head() {
    return (
        <section id="accueil" className="hero">
            <div className="container hero-grid">
                <div className="hero-copy" data-reveal>
                    <p className="hero-hello">Bonjour, moi c’est Beni.</p>
                    <h1>Des idées au code.<br /><span>Des solutions<br />qui comptent.</span></h1>
                    <p className="hero-description">Je suis <strong>Beni Mukungulu</strong>, développeur web, mobile & desktop. Je transforme vos idées en expériences digitales utiles, intuitives et soignées.</p>
                    <div className="hero-actions">
                        <a className="button button-mint" href="#projets">Explorer mes projets <FiArrowUpRight /></a>
                        <a className="text-link" href="/CV_beni_mukungulu.pdf" download>Télécharger mon CV <FiDownload /></a>
                    </div>
                    <div className="hero-bottom">
                        <div className="social-links">
                            {socials.slice(0, 3).map(([Icon, name, href]) => (
                                <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}><Icon /></a>
                            ))}
                        </div>
                        <span>Du premier concept au déploiement.</span>
                    </div>
                </div>
                <div className="portrait-composition" data-reveal>
                    <div className="portrait-outline" aria-hidden="true" />
                    <div className="portrait-frame">
                        <img src={portrait} alt="Beni Mukungulu, développeur full-stack à Kinshasa" fetchPriority="high" />
                        <div className="portrait-caption">
                            <span>BENI MUKUNGULU</span>
                            <span>Développeur & créateur de solutions</span>
                        </div>
                    </div>
                    <div className="portrait-sticker"><FiCode /><span>Une idée.<br /><strong>Une solution.</strong></span></div>
                    <span className="portrait-coordinate">BENI MUKUNGULU · KINSHASA, RDC</span>
                </div>
            </div>

            <div className="container hero-footer">
                <span>WEB / MOBILE / DESKTOP</span>
                <a href="#apropos">Un peu plus sur moi <FiArrowDown /></a>
                <span>CONÇU AVEC INTENTION</span>
            </div>
        </section>
    )
}
