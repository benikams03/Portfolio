import { FiArrowUpRight, FiArrowDown, FiDownload, FiCode } from 'react-icons/fi'
import portrait from '../../assets/photos/Sans titre-1.jpg'
import { socials } from '../../data/socials.js'

const container = 'mx-auto w-[min(1200px,calc(100%_-_96px))] max-[1100px]:w-[calc(100%_-_64px)] max-[800px]:w-[calc(100%_-_40px)]'

const textLink = 'inline-flex items-center gap-[13px] border-b border-[#ffffff50] pb-2.5 text-[13px] font-[560] [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-[3px] max-[1100px]:text-xs'

export default function Head() {
    return (
        <section className="relative overflow-hidden bg-ink pt-[154px] text-[#fafafa] min-[1500px]:pt-[175px] max-[800px]:pt-[120px] max-[600px]:pt-[110px]">
            <div className={`${container} grid grid-cols-[1.2fr_1fr] items-center gap-[70px] pb-[76px] min-[1500px]:pb-[100px] max-[1100px]:gap-[45px] max-[800px]:gap-[35px] max-[600px]:grid-cols-1 max-[600px]:gap-[45px] max-[600px]:pb-[42px]`}>
                <div className="max-[600px]:max-w-[470px]" data-reveal>
                    <p className="mb-3 text-[18px] text-[#d4d4d4] max-[800px]:text-[15px] max-[600px]:text-[16px]">Bonjour, moi c’est Beni.</p>
                    <h1 className="text-[clamp(42px,4.6vw,68px)] leading-[1.06] font-[570] tracking-[-2.8px] max-[800px]:text-[42px] max-[800px]:tracking-[-1.7px] max-[600px]:text-[clamp(39px,10vw,57px)]">
                        Des idées au code.<br /><span className="text-accent">Des solutions<br />qui comptent.</span>
                    </h1>
                    <p className="mt-[26px] max-w-[465px] text-[15px] leading-[1.85] text-[#b9b9b9] max-[800px]:text-[13px] max-[600px]:max-w-[390px] max-[600px]:text-[14px]">
                        Je suis <strong className="font-[500] text-[#fafafa]">Beni Mukungulu</strong>, développeur web, mobile & desktop. Je transforme vos idées en expériences digitales utiles, intuitives et soignées.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-6 max-[1100px]:gap-[15px] max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-2 max-[600px]:flex-row max-[600px]:items-center max-[600px]:gap-[18px]">
                        <a
                            className="inline-flex items-center justify-center gap-[25px] rounded bg-accent px-[21px] py-4 text-[13px] font-[620] text-ink transition duration-300 hover:-translate-y-[3px] hover:bg-accentlight [&_svg]:text-[19px] max-[600px]:gap-3 max-[600px]:px-[17px] max-[600px]:py-3.5 max-[600px]:text-xs"
                            href="#projets"
                        >
                            Explorer mes projets <FiArrowUpRight />
                        </a>
                        <a className={textLink} href="/CV_beni_mukungulu.pdf" download>
                            Télécharger mon CV <FiDownload />
                        </a>
                    </div>
                    <div className="mt-[38px] flex items-center gap-5 max-[600px]:mt-[27px]">
                        <div className="flex items-center gap-[17px]">
                            {socials.slice(0, 3).map(([Icon, name, href]) => (
                                <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className="text-lg transition duration-200 hover:-translate-y-[3px] hover:text-[#e8805a]">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                        <span className="border-l border-[#ffffff26] pl-5 text-[11px] text-[#a9a9a9] max-[1100px]:text-[10px] max-[800px]:hidden max-[600px]:block max-[600px]:text-[9px]">
                            Du premier concept au déploiement.
                        </span>
                    </div>
                </div>
                <div className="relative w-full max-w-[455px] justify-self-end py-0 pr-2.5 pb-[22px] max-[600px]:w-[85%] max-[600px]:max-w-[350px] max-[600px]:justify-self-center" data-reveal>
                    <div className="absolute top-[20px] right-[-10px] bottom-1 left-5 rounded-[120px_8px_8px_8px] border border-[#d9653b55] max-[800px]:rounded-tl-[85px] max-[600px]:rounded-tl-[95px]" aria-hidden="true" />
                    <div className="group relative aspect-[0.83] overflow-hidden rounded-[120px_8px_8px_8px] bg-[#2a2a2e] max-[800px]:aspect-[0.73] max-[800px]:rounded-tl-[85px] max-[600px]:aspect-[0.9] max-[600px]:rounded-tl-[95px]">
                        <img
                            src={portrait}
                            alt="Beni Mukungulu, développeur full-stack à Kinshasa"
                            fetchPriority="high"
                            className="h-full w-full object-cover object-[50%_31%] transition-transform duration-1000 group-hover:scale-[1.035] max-[600px]:object-[50%_27%]"
                        />
                        <div className="pointer-events-none absolute inset-x-0 top-1/2 bottom-0 bg-[linear-gradient(transparent,#000000bb)]" />
                        <div className="absolute bottom-7 left-7 z-[1] flex flex-col gap-[5px] max-[800px]:bottom-5 max-[800px]:left-[17px]">
                            <span className="text-xs tracking-[2px] max-[800px]:text-[10px] max-[600px]:text-[11px]">BENI MUKUNGULU</span>
                            <span className="text-[11px] text-[#d9d9d9] max-[800px]:text-[8px] max-[600px]:text-[10px]">Développeur & créateur de solutions</span>
                        </div>
                    </div>
                    <div className="absolute top-[52%] left-[-30px] flex animate-float items-center gap-3.5 rounded bg-[#f5f5f4] px-[23px] py-[18px] text-ink shadow-[0_10px_35px_#0002] [transform:rotate(-5deg)] max-[800px]:left-[-18px] max-[800px]:top-[58%] max-[800px]:gap-2 max-[800px]:p-3 max-[600px]:left-[-23px] max-[600px]:px-[18px] max-[600px]:py-3.5">
                        <FiCode className="text-[28px] text-[#d9653b] max-[800px]:text-[22px]" />
                        <span className="text-xs leading-[1.5] max-[800px]:text-[10px] max-[600px]:text-[11px]">
                            Une idée.<br /><strong className="font-[650]">Une solution.</strong>
                        </span>
                    </div>
                    <span className="absolute -bottom-[14px] right-1 text-[9px] tracking-[1.7px] text-[#a9a9a9] max-[800px]:text-[7px]">BENI MUKUNGULU · KINSHASA, RDC</span>
                </div>
            </div>

            <div className={`${container} flex items-center justify-between gap-5 border-t border-[#ffffff20] py-6 text-[9px] tracking-[1.8px] text-[#a9a9a9] max-[600px]:py-5 max-[600px]:text-[7px] max-[600px]:tracking-[1px]`}>
                <span>WEB / MOBILE / DESKTOP</span>
                <a href="#apropos" className="flex items-center gap-4 text-xs tracking-normal text-[#e0e0e0] max-[600px]:gap-[9px] max-[600px]:text-[10px]">
                    Un peu plus sur moi <FiArrowDown className="animate-nudge text-accent" />
                </a>
                <span className="max-[600px]:hidden">CONÇU AVEC INTENTION</span>
            </div>
        </section>
    )
}
