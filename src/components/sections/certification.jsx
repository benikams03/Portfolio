import { FiArrowUpRight, FiAward } from 'react-icons/fi'
import SectionTitle from './section-title.jsx'
import { dataCertification, certificates } from '../../data/data.js'

const container = 'mx-auto w-[min(1200px,calc(100%_-_96px))] max-[1100px]:w-[calc(100%_-_64px)] max-[800px]:w-[calc(100%_-_40px)]'
const section = 'bg-mist py-[112px] max-[800px]:py-[75px] max-[600px]:py-[62px]'
const darkLink = 'mt-[18px] inline-flex items-center gap-[13px] border-b border-[#a6b5a7] pb-2.5 text-[13px] font-[560] text-ink [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-[3px]'
const tag = 'rounded border border-[#d7dfd7] bg-[#ffffff45] px-2.5 py-1.5 text-[11px] text-[#586b63] max-[600px]:px-[7px] max-[600px]:py-[5px] max-[600px]:text-[10px]'

export default function Certification({ onOpenDocument }) {
    return (
        <section id="certificats" className={section}>
            <div className={container}>
                <SectionTitle
                    number="03"
                    label="FORMATION & CERTIFICATS"
                    title={<>Apprendre. Pratiquer.<br />Continuer à évoluer.</>}
                >
                    Mon parcours académique et un espace dédié aux certifications qui l’enrichissent.
                </SectionTitle>
                <div className="grid grid-cols-[1fr_1.05fr] gap-[90px] max-[1100px]:gap-10 max-[800px]:grid-cols-2 max-[800px]:gap-[25px] max-[600px]:grid-cols-1 max-[600px]:gap-[35px]">
                    <div id="education" data-reveal>
                        <p className="flex items-center gap-2.5 text-[11px] leading-[1.6] font-[650] tracking-[2px]">PARCOURS ACADÉMIQUE</p>
                        {[...dataCertification].reverse().map(item => (
                            <article className="relative mt-[30px] border-l border-[#c6d5c8] pb-3 pl-[25px] before:absolute before:top-1 before:left-[-4px] before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#698f73] before:content-['']" key={item.titre}>
                                <span className="text-[11px] text-[#63806d]">{item.date}</span>
                                <h3 className="my-[9px] text-[21px] font-[550]">{item.titre}</h3>
                                <p className="max-w-[330px] text-[13px] leading-[1.8] text-muted">{item.description}</p>
                                {item.documentUrl
                                    ? <a className={darkLink} href={item.documentUrl} target="_blank" rel="noreferrer" aria-label={`Voir le diplôme : ${item.titre}`}>Voir le diplôme <FiArrowUpRight /></a>
                                    : <button className={darkLink} onClick={event => onOpenDocument(event, { type: 'diploma', title: item.titre, description: item.description, year: item.date })} aria-label={`Voir le diplôme : ${item.titre}`}>Voir le diplôme <FiArrowUpRight /></button>}
                            </article>
                        ))}
                    </div>
                    <div className="grid content-start gap-5">
                        {certificates.map(certificate => (
                            <article className="grid grid-cols-2 items-center gap-6 rounded border border-[#dce3d8] bg-[#f9faf6] p-[22px] max-[1100px]:gap-4 max-[1100px]:p-4 max-[800px]:flex max-[800px]:flex-col max-[800px]:items-stretch max-[600px]:grid max-[600px]:grid-cols-[0.95fr_1fr] max-[600px]:gap-4" key={certificate.id} data-reveal>
                                <div className="relative flex aspect-[0.85] items-center bg-[#e0e8dd] p-3.5 max-[800px]:aspect-[1.4] max-[800px]:px-10 max-[800px]:py-[18px] max-[600px]:aspect-[0.8] max-[600px]:p-[9px]" aria-hidden="true">
                                    <div className="flex w-full flex-col items-center border-[3px] border-double border-[#aab7a1] bg-[#fffef9] px-2 py-[18px] text-center shadow-[0_4px_10px_#1b302b15] max-[600px]:px-[5px] max-[600px]:py-3.5">
                                        <span className="text-[6px] tracking-[1px]">DEVKAMS · APERÇU</span>
                                        <FiAward className="mt-3.5 mb-2 text-[30px] text-[#809571]" />
                                        <strong className="font-serif text-base tracking-[2px] max-[600px]:text-xs">CERTIFICAT</strong>
                                        <span className="mt-1 text-[6px] tracking-[1px]">DE DÉMONSTRATION</span>
                                        <div className="mx-auto my-3.5 h-px w-[50px] bg-[#92a381]" />
                                        <b className="font-serif text-xs max-[600px]:text-[10px]">Beni Mukungulu</b>
                                        <small className="mt-2 text-[7px]">{certificate.title}</small>
                                    </div>
                                    <span className="absolute right-1.5 bottom-[7px] text-[7px] tracking-[1px] text-[#57724f]">EXEMPLE</span>
                                </div>
                                <div>
                                    <span className="inline-block rounded border border-[#ccd9cd] px-2 py-1 text-[10px] leading-[1.4] text-[#61776a] max-[600px]:text-[8px]">Certificat de démonstration</span>
                                    <h3 className="mt-[17px] text-[22px] leading-[1.2] font-[550] max-[800px]:text-xl max-[600px]:text-xl">{certificate.title}</h3>
                                    <p className="mt-[11px] text-xs leading-[1.8] text-muted max-[600px]:text-[11px]">{certificate.issuer} · {certificate.year}</p>
                                    <button
                                        className="mt-[18px] inline-flex items-center gap-[13px] border-b border-[#a6b5a7] pb-2.5 text-xs font-[560] text-ink [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-[3px] max-[800px]:mt-2.5 max-[600px]:gap-1.5 max-[600px]:text-[11px]"
                                        onClick={event => onOpenDocument(event, { ...certificate, type: 'certificate' })}
                                        aria-label={`Voir le certificat : ${certificate.title}`}
                                    >
                                        Voir le certificat <FiArrowUpRight />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
