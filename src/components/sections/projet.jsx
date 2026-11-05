import { FiArrowUpRight } from 'react-icons/fi'
import SectionTitle from './section-title.jsx'
import { dataprojet } from '../../data/data.js'

const container = 'mx-auto w-[min(1200px,calc(100%_-_96px))] max-[1100px]:w-[calc(100%_-_64px)] max-[800px]:w-[calc(100%_-_40px)]'
const section = 'bg-sage py-[112px] max-[800px]:py-[75px] max-[600px]:py-[62px]'

export default function Projet() {
    return (
        <section id="projets" className={section}>
            <div className={container}>
                <SectionTitle
                    number="04"
                    label="SÉLECTION DE PROJETS"
                    title={<>Du code, mais surtout<br />des projets concrets.</>}
                >
                    Gestion, tourisme, événementiel : quelques réalisations qui donnent forme à mon travail.
                </SectionTitle>
                <div className="grid grid-cols-3 gap-[30px] max-[800px]:gap-[18px] max-[600px]:grid-cols-1 max-[600px]:gap-9">
                    {dataprojet.map((project, index) => (
                        <article
                            className="[&:nth-child(2)]:[transition-delay:100ms] [&:nth-child(3)]:[transition-delay:200ms]"
                            key={project.titre}
                            data-reveal
                        >
                            <a
                                className="group relative block aspect-[1.4] overflow-hidden rounded border border-[#d9e0d9] bg-[#dce4dc] max-[600px]:aspect-[1.5]"
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Découvrir ${project.titre} (nouvel onglet)`}
                            >
                                <img src={project.image} alt={`Aperçu du projet ${project.titre}`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-[600ms] group-hover:scale-[1.06]" />
                                <span className="absolute right-3.5 bottom-3.5 grid h-[38px] w-[38px] place-items-center rounded-full bg-[#f8fbf3] transition-colors duration-200 group-hover:bg-mint">
                                    <FiArrowUpRight />
                                </span>
                            </a>
                            <div className="mt-[23px] flex justify-between text-[9px] tracking-[1.2px] text-[#63746a] max-[800px]:mt-[17px] max-[800px]:text-[7px] max-[600px]:text-[8px]">
                                <span>0{index + 1} / {index === 0 ? 'APPLICATION MÉTIER' : 'APPLICATION WEB'}</span>
                                <span>↗</span>
                            </div>
                            <h3 className="mt-[11px] text-[25px] font-[550] tracking-[-0.5px] max-[800px]:text-[22px] max-[600px]:text-[25px]">
                                <a href={project.link} target="_blank" rel="noreferrer">{project.titre}</a>
                            </h3>
                            <p className="mt-[13px] text-[13px] leading-[1.85] text-[#64716b] max-[800px]:text-xs max-[600px]:mt-[9px] max-[600px]:text-[13px]">{project.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
