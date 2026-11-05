import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const container = 'mx-auto w-[min(1200px,calc(100%_-_96px))] max-[1100px]:w-[calc(100%_-_64px)] max-[800px]:w-[calc(100%_-_40px)]'

export default function Contact() {
    return (
        <section id="Contact" className="bg-ink px-0 pt-[95px] pb-[55px] text-[#fafafa] max-[800px]:pt-[75px] max-[600px]:pt-[62px] max-[600px]:pb-[35px]">
            <div className={container}>
                <div className="flex items-center justify-between gap-10 max-[600px]:gap-[15px]" data-reveal>
                    <div>
                        <p className="flex items-center gap-2.5 text-[10px] leading-[1.6] font-[650] tracking-[2px] text-[#b9b9b9] max-[600px]:text-[8px] max-[600px]:tracking-[1.1px]">
                            05 / ET SI ON CRÉAIT QUELQUE CHOSE ?
                        </p>
                        <h2 className="mt-[26px] text-[clamp(36px,5vw,65px)] leading-[1.1] font-[500] tracking-[-2px] max-[600px]:mt-5 max-[600px]:text-[36px] max-[600px]:tracking-[-1.3px]">
                            Votre prochaine idée<br />commence <span className="text-accent">ici.</span>
                        </h2>
                    </div>
                    <a
                        href="mailto:benikams03@gmail.com"
                        className="grid h-[100px] w-[100px] shrink-0 place-items-center rounded-full bg-accent text-[40px] text-ink transition-transform duration-300 hover:rotate-45 max-[600px]:h-[54px] max-[600px]:w-[54px] max-[600px]:text-[26px]"
                        aria-label="Écrire à Beni par email"
                    >
                        <FiArrowUpRight />
                    </a>
                </div>
                <div className="mt-[60px] grid grid-cols-[1.2fr_1fr_1fr] gap-[30px] border-t border-[#ffffff25] pt-[35px] max-[800px]:gap-[18px] max-[600px]:mt-[35px] max-[600px]:grid-cols-1 max-[600px]:gap-[25px] max-[600px]:pt-7" data-reveal>
                    <a href="mailto:benikams03@gmail.com" className="flex items-center gap-[17px] text-sm max-[800px]:gap-2.5 max-[800px]:text-xs max-[600px]:gap-4 max-[600px]:text-sm">
                        <FiMail className="shrink-0 text-[22px] text-[#b9b9b9] max-[800px]:text-lg max-[600px]:text-[21px]" />
                        <span><small className="mb-[9px] block text-[8px] tracking-[1.8px] text-[#a9a9a9] max-[800px]:mb-1.5 max-[800px]:text-[7px] max-[600px]:mb-[5px] max-[600px]:text-[8px]">ÉCRIVEZ-MOI</small>benikams03@gmail.com</span>
                    </a>
                    <a href="tel:+243890395930" className="flex items-center gap-[17px] text-sm max-[800px]:gap-2.5 max-[800px]:text-xs max-[600px]:gap-4 max-[600px]:text-sm">
                        <FiPhone className="shrink-0 text-[22px] text-[#b9b9b9] max-[800px]:text-lg max-[600px]:text-[21px]" />
                        <span><small className="mb-[9px] block text-[8px] tracking-[1.8px] text-[#a9a9a9] max-[800px]:mb-1.5 max-[800px]:text-[7px] max-[600px]:mb-[5px] max-[600px]:text-[8px]">APPELEZ-MOI</small>+243 890 395 930</span>
                    </a>
                    <div className="flex items-center gap-[17px] text-sm max-[800px]:gap-2.5 max-[800px]:text-xs max-[600px]:gap-4 max-[600px]:text-sm">
                        <FiMapPin className="shrink-0 text-[22px] text-[#b9b9b9] max-[800px]:text-lg max-[600px]:text-[21px]" />
                        <span><small className="mb-[9px] block text-[8px] tracking-[1.8px] text-[#a9a9a9] max-[800px]:mb-1.5 max-[800px]:text-[7px] max-[600px]:mb-[5px] max-[600px]:text-[8px]">RETROUVEZ-MOI</small>Kinshasa, Lemba · RDC</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
