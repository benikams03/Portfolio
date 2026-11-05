import { FiArrowUpRight, FiAward } from 'react-icons/fi'
import SectionTitle from './section-title.jsx'
import { dataCertification, certificates } from '../../data/data.js'

export default function Certification({ onOpenDocument }) {
    return (
        <section id="certificats" className="section learning-section">
            <div className="container">
                <SectionTitle
                    number="03"
                    label="FORMATION & CERTIFICATS"
                    title={<>Apprendre. Pratiquer.<br />Continuer à évoluer.</>}
                >
                    Mon parcours académique et un espace dédié aux certifications qui l’enrichissent.
                </SectionTitle>
                <div className="learning-grid">
                    <div id="education" className="education-list" data-reveal>
                        <p className="eyebrow">PARCOURS ACADÉMIQUE</p>
                        {[...dataCertification].reverse().map(item => (
                            <article key={item.titre}>
                                <span>{item.date}</span>
                                <h3>{item.titre}</h3>
                                <p>{item.description}</p>
                                {item.documentUrl
                                    ? <a className="text-link dark-link" href={item.documentUrl} target="_blank" rel="noreferrer" aria-label={`Voir le diplôme : ${item.titre}`}>Voir le diplôme <FiArrowUpRight /></a>
                                    : <button className="text-link dark-link" onClick={event => onOpenDocument(event, { type: 'diploma', title: item.titre, description: item.description, year: item.date })} aria-label={`Voir le diplôme : ${item.titre}`}>Voir le diplôme <FiArrowUpRight /></button>}
                            </article>
                        ))}
                    </div>
                    <div className="certificate-area">
                        {certificates.map(certificate => (
                            <article className="certificate-card" key={certificate.id} data-reveal>
                                <div className="certificate-preview" aria-hidden="true">
                                    <div className="mini-certificate">
                                        <span>DEVKAMS · APERÇU</span>
                                        <FiAward />
                                        <strong>CERTIFICAT</strong>
                                        <span>DE DÉMONSTRATION</span>
                                        <div className="certificate-line" />
                                        <b>Beni Mukungulu</b>
                                        <small>{certificate.title}</small>
                                    </div>
                                    <span className="preview-label">EXEMPLE</span>
                                </div>
                                <div className="certificate-info">
                                    <span className="sample-label">Certificat de démonstration</span>
                                    <h3>{certificate.title}</h3>
                                    <p>{certificate.issuer} · {certificate.year}</p>
                                    <button className="text-link dark-link" onClick={event => onOpenDocument(event, { ...certificate, type: 'certificate' })} aria-label={`Voir le certificat : ${certificate.title}`}>Voir le certificat <FiArrowUpRight /></button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
