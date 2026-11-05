import { FiArrowUpRight } from 'react-icons/fi'
import { FaAndroid, FaApple, FaWindows, FaLinux } from 'react-icons/fa'
import SectionTitle from './section-title.jsx'
import { dataprojet } from '../../data/dataprojet.js'

const container = 'mx-auto w-[min(1200px,calc(100%_-_96px))] max-[1100px]:w-[calc(100%_-_64px)] max-[800px]:w-[calc(100%_-_40px)]'
const section = 'bg-sage py-[112px] max-[800px]:py-[75px] max-[600px]:py-[62px]'

const typeLabels = { web: 'APPLICATION WEB', mobile: 'APPLICATION MOBILE', desktop: 'APPLICATION DESKTOP' }

const downloadButtons = {
    mobile: [
        { key: 'android', label: 'Android', Icon: FaAndroid },
        { key: 'ios', label: 'iOS', Icon: FaApple },
    ],
    desktop: [
        { key: 'windows', label: 'Windows', Icon: FaWindows },
        { key: 'mac', label: 'Mac', Icon: FaApple },
        { key: 'linux', label: 'Linux', Icon: FaLinux },
    ],
}

const downloadBtn = 'inline-flex items-center gap-1.5 rounded border border-[#e8e8e6] px-2.5 py-1.5 text-[11px] font-semibold text-[#6b6b6b] transition hover:border-accent hover:text-accent'

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
                    {dataprojet.map((project, index) => {
                        const isWeb = project.type === 'web'
                        const mediaClass = 'group relative block aspect-[1.4] overflow-hidden rounded border border-[#e8e8e6] bg-[#efede9] max-[600px]:aspect-[1.5]'
                        const mediaContent = <>
                            <img src={project.image} alt={`Aperçu du projet ${project.titre}`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-[600ms] group-hover:scale-[1.06]" />
                            {isWeb && (
                                <span className="absolute right-3.5 bottom-3.5 grid h-[38px] w-[38px] place-items-center rounded-full bg-[#fafafa] transition-colors duration-200 group-hover:bg-accent">
                                    <FiArrowUpRight />
                                </span>
                            )}
                        </>
                        return (
                            <article
                                className="[&:nth-child(2)]:[transition-delay:100ms] [&:nth-child(3)]:[transition-delay:200ms]"
                                key={`${project.titre}-${project.type}-${index}`}
                                data-reveal
                            >
                                {isWeb
                                    ? <a className={mediaClass} href={project.link} target="_blank" rel="noreferrer" aria-label={`Découvrir ${project.titre} (nouvel onglet)`}>{mediaContent}</a>
                                    : <div className={mediaClass}>{mediaContent}</div>}
                                <div className="mt-[23px] flex justify-between text-[9px] tracking-[1.2px] text-[#6b6b6b] max-[800px]:mt-[17px] max-[800px]:text-[7px] max-[600px]:text-[8px]">
                                    <span>0{index + 1} / {index === 0 ? 'APPLICATION MÉTIER' : (typeLabels[project.type] ?? 'PROJET')}</span>
                                    <span>{isWeb ? '↗' : '⬇'}</span>
                                </div>
                                <h3 className="mt-[11px] text-[25px] font-[550] tracking-[-0.5px] max-[800px]:text-[22px] max-[600px]:text-[25px]">
                                    <a href={project.link} target="_blank" rel="noreferrer">{project.titre}</a>
                                </h3>
                                <p className="mt-[13px] text-[13px] leading-[1.85] text-[#6b6b6b] max-[800px]:text-xs max-[600px]:mt-[9px] max-[600px]:text-[13px]">{project.text}</p>
                                {!isWeb && project.download && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {(downloadButtons[project.type] ?? []).map(({ key, label, Icon }) => {
                                            const href = project.download[key]
                                            if (!href) return null
                                            const isLocal = href.startsWith('/')
                                            return (
                                                <a
                                                    key={key}
                                                    className={downloadBtn}
                                                    href={href}
                                                    {...(isLocal ? { download: true } : { target: '_blank', rel: 'noreferrer' })}
                                                    aria-label={`Télécharger ${project.titre} pour ${label}`}
                                                >
                                                    <Icon /> {label}
                                                </a>
                                            )
                                        })}
                                    </div>
                                )}
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
