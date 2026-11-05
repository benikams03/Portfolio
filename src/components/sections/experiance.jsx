import { FiBriefcase } from 'react-icons/fi'
import SectionTitle from './section-title.jsx'
import { experiences } from '../../data/experiences.js'

const container = 'mx-auto w-[min(1200px,calc(100%_-_96px))] max-[1100px]:w-[calc(100%_-_64px)] max-[800px]:w-[calc(100%_-_40px)]'
const section = 'bg-paper py-[112px] max-[800px]:py-[75px] max-[600px]:py-[62px]'
const tag = 'rounded border border-[#e8e8e6] bg-[#ffffff45] px-2.5 py-1.5 text-[11px] text-[#6b6b6b] max-[600px]:px-[7px] max-[600px]:py-[5px] max-[600px]:text-[10px]'

export default function Experiance() {
    return (
        <section id="experience" className={section}>
            <div className={container}>
                <SectionTitle
                    number="02"
                    label="EXPÉRIENCES"
                    title={<>Un parcours qui<br />se construit en pratique.</>}
                >
                    Les entreprises, les missions et les rôles qui jalonnent mon parcours professionnel.
                </SectionTitle>
                <div className="border-t border-line">
                    {experiences.map(experience => (
                        <article
                            className="grid grid-cols-[260px_60px_1fr] gap-[30px] border-b border-line py-10 max-[1100px]:grid-cols-[220px_45px_1fr] max-[1100px]:gap-5 max-[600px]:grid-cols-[35px_1fr] max-[600px]:gap-[18px] max-[600px]:py-[27px]"
                            key={experience.id}
                            data-reveal
                        >
                            <div className="max-[600px]:col-start-2">
                                <span className="inline-block rounded border border-[#e8e8e6] px-2 py-1 text-[10px] leading-[1.4] text-[#6b6b6b]">Exemple de présentation</span>
                                <p className="mt-[19px] text-[15px] max-[600px]:mt-3 max-[600px]:text-sm">{experience.period}</p>
                                <span className="text-xs text-muted">{experience.duration}</span>
                            </div>
                            <div className="grid h-11 w-11 place-items-center rounded-full border border-[#e5e0da] bg-[#f3ece7] text-[#b4552d] max-[600px]:col-start-1 max-[600px]:row-span-2 max-[600px]:row-start-1 max-[600px]:h-[35px] max-[600px]:w-[35px] max-[600px]:text-[15px]">
                                <FiBriefcase />
                            </div>
                            <div className="max-[600px]:col-start-2">
                                <p className="mb-[7px] text-xs text-[#6b6b6b]">{experience.company}</p>
                                <h3 className="text-[25px] font-[550] tracking-[-0.5px] max-[600px]:text-[22px]">{experience.role}</h3>
                                <p className="mt-[14px] mb-5 max-w-[620px] text-sm leading-[1.9] text-muted max-[600px]:text-[13px]">{experience.description}</p>
                                <div className="flex flex-wrap gap-[7px] max-[600px]:gap-[5px]">
                                    {experience.skills.map(skill => <span className={tag} key={skill}>{skill}</span>)}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <p className="mt-5 text-xs leading-[1.8] text-muted max-[600px]:text-[11px]">Cette expérience est illustrative. Elle sera remplacée par les entreprises, postes et dates de mon parcours.</p>
            </div>
        </section>
    )
}
