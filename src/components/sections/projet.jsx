import { FiArrowUpRight } from 'react-icons/fi'
import SectionTitle from './section-title.jsx'
import { dataprojet } from '../../data/data.js'

export default function Projet() {
    return (
        <section id="projets" className="section projects-section">
            <div className="container">
                <SectionTitle
                    number="04"
                    label="SÉLECTION DE PROJETS"
                    title={<>Du code, mais surtout<br />des projets concrets.</>}
                >
                    Gestion, tourisme, événementiel : quelques réalisations qui donnent forme à mon travail.
                </SectionTitle>
                <div className="project-grid">
                    {dataprojet.map((project, index) => (
                        <article className="project-card" key={project.titre} data-reveal>
                            <a className="project-image" href={project.link} target="_blank" rel="noreferrer" aria-label={`Découvrir ${project.titre} (nouvel onglet)`}>
                                <img src={project.image} alt={`Aperçu du projet ${project.titre}`} loading="lazy" />
                                <span className="project-open"><FiArrowUpRight /></span>
                            </a>
                            <div className="project-meta">
                                <span>0{index + 1} / {index === 0 ? 'APPLICATION MÉTIER' : 'APPLICATION WEB'}</span>
                                <span>↗</span>
                            </div>
                            <h3><a href={project.link} target="_blank" rel="noreferrer">{project.titre}</a></h3>
                            <p>{project.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
