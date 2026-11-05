import { FiArrowUpRight, FiCode, FiSmartphone, FiLayers } from 'react-icons/fi'
import SectionTitle from './section-title.jsx'
import Skills from './skils.jsx'

const container = 'mx-auto w-[min(1200px,calc(100%_-_96px))] max-[1100px]:w-[calc(100%_-_64px)] max-[800px]:w-[calc(100%_-_40px)]'
const section = 'py-[112px] max-[800px]:py-[75px] max-[600px]:py-[62px]'
const darkLink = 'mt-[18px] inline-flex items-center gap-[13px] border-b border-[#d9d9d9] pb-2.5 text-[13px] font-[560] text-ink [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-[3px]'

export default function Apropos() {
    return (
        <section id="apropos" className={section}>
            <div className={container}>
                <SectionTitle
                    number="01"
                    label="À PROPOS"
                    title={<>La technique au service<br />de vos idées.</>}
                >
                    Une approche complète du développement, avec la même attention portée au code et à l’expérience utilisateur.
                </SectionTitle>
                <div className="grid grid-cols-[1fr_1.1fr] gap-[100px] max-[1100px]:gap-[55px] max-[800px]:gap-[35px] max-[600px]:grid-cols-1">
                    <div className="text-[15px] leading-[1.95] text-[#6b6b6b] [&_p+p]:mt-[18px] max-[600px]:text-sm" data-reveal>
                        <p>Basé à <strong className="font-[550] text-ink">Kinshasa, en République démocratique du Congo</strong>, je conçois des applications modernes, rapides et faciles à utiliser.</p>
                        <p>De la conception au déploiement, j’aime comprendre un besoin, structurer une solution et lui donner vie. React, React Native, Node.js, TypeScript ou Laravel : je choisis les outils adaptés à chaque projet.</p>
                        <a className={darkLink} href="#Contact">Faisons connaissance <FiArrowUpRight /></a>
                    </div>
                    <div>
                        {[
                            [FiCode, 'Développement web', 'Des interfaces responsives et des applications pensées pour leurs utilisateurs.'],
                            [FiSmartphone, 'Applications mobiles', 'Des expériences accessibles sur mobile avec React Native.'],
                            [FiLayers, 'Solutions desktop', 'Des outils métier concrets pour simplifier le travail au quotidien.'],
                        ].map(([Icon, title, text]) => (
                            <article className="flex items-start gap-[21px] border-b border-line py-[23px] first:pt-0" key={title} data-reveal>
                                <Icon className="mt-[3px] shrink-0 text-[23px] text-[#d9653b]" />
                                <div>
                                    <h3 className="mb-[7px] text-lg font-[550]">{title}</h3>
                                    <p className="max-w-[340px] text-[13px] leading-[1.7] text-muted max-[600px]:text-xs">{text}</p>
                                </div>
                                <FiArrowUpRight className="ml-auto shrink-0" />
                            </article>
                        ))}
                    </div>
                </div>
                <Skills />
            </div>
        </section>
    )
}
