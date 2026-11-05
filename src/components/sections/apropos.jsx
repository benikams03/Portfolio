import { FiArrowUpRight, FiCode, FiSmartphone, FiLayers } from 'react-icons/fi'
import SectionTitle from './section-title.jsx'
import Skills from './skils.jsx'

export default function Apropos() {
    return (
        <section id="apropos" className="section about-section">
            <div className="container">
                <SectionTitle
                    number="01"
                    label="À PROPOS"
                    title={<>La technique au service<br />de vos idées.</>}
                >
                    Une approche complète du développement, avec la même attention portée au code et à l’expérience utilisateur.
                </SectionTitle>
                <div className="about-grid">
                    <div className="about-copy" data-reveal>
                        <p>Basé à <strong>Kinshasa, en République démocratique du Congo</strong>, je conçois des applications modernes, rapides et faciles à utiliser.</p>
                        <p>De la conception au déploiement, j’aime comprendre un besoin, structurer une solution et lui donner vie. React, React Native, Node.js, TypeScript ou Laravel : je choisis les outils adaptés à chaque projet.</p>
                        <a className="text-link dark-link" href="#Contact">Faisons connaissance <FiArrowUpRight /></a>
                    </div>
                    <div className="services">
                        {[
                            [FiCode, 'Développement web', 'Des interfaces responsives et des applications pensées pour leurs utilisateurs.'],
                            [FiSmartphone, 'Applications mobiles', 'Des expériences accessibles sur mobile avec React Native.'],
                            [FiLayers, 'Solutions desktop', 'Des outils métier concrets pour simplifier le travail au quotidien.'],
                        ].map(([Icon, title, text]) => (
                            <article className="service-row" key={title} data-reveal>
                                <Icon />
                                <div>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </div>
                                <FiArrowUpRight />
                            </article>
                        ))}
                    </div>
                </div>
                <Skills />
            </div>
        </section>
    )
}
