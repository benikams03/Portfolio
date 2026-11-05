import { FiBriefcase } from 'react-icons/fi'
import SectionTitle from './section-title.jsx'
import { experiences } from '../../data/data.js'

export default function Experiance() {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <SectionTitle
                    number="02"
                    label="EXPÉRIENCES"
                    title={<>Un parcours qui<br />se construit en pratique.</>}
                >
                    Les entreprises, les missions et les rôles qui jalonnent mon parcours professionnel.
                </SectionTitle>
                <div className="timeline">
                    {experiences.map(experience => (
                        <article className="experience-row" key={experience.id} data-reveal>
                            <div className="experience-period">
                                <span className="sample-label">Exemple de présentation</span>
                                <p>{experience.period}</p>
                                <span>{experience.duration}</span>
                            </div>
                            <div className="timeline-marker"><FiBriefcase /></div>
                            <div className="experience-content">
                                <p className="company">{experience.company}</p>
                                <h3>{experience.role}</h3>
                                <p>{experience.description}</p>
                                <div className="tags">
                                    {experience.skills.map(skill => <span key={skill}>{skill}</span>)}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <p className="sample-note">Cette expérience est illustrative. Elle sera remplacée par les entreprises, postes et dates de mon parcours.</p>
            </div>
        </section>
    )
}
