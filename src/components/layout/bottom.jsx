import { FiArrowUpRight } from 'react-icons/fi'
import { socials } from '../../data/socials.js'

const container = 'mx-auto w-[min(1200px,calc(100%_-_96px))] max-[1100px]:w-[calc(100%_-_64px)] max-[800px]:w-[calc(100%_-_40px)]'

export default function Bottom() {
    return (
        <footer className="border-t border-[#ffffff14] bg-night py-[29px] text-[#b8c8be]">
            <div className={`${container} flex items-center justify-between gap-[25px] max-[1100px]:flex-wrap max-[1100px]:[&>p]:flex-1`}>
                <a className="text-[23px] font-[780] tracking-[-1.3px] whitespace-nowrap" href="#accueil">
                    <span className="font-[430]">dev</span>
                    <span className="font-[430]">kams</span>
                    <i className="not-italic text-mint">.</i>
                </a>
                <p className="text-[10px] text-[#8ca499] max-[600px]:order-4 max-[600px]:basis-full max-[600px]:leading-[1.8]">
                    © {new Date().getFullYear()} Beni Mukungulu. Tous droits réservés.
                </p>
                <div className="flex items-center gap-3.5">
                    {socials.map(([Icon, name, href]) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={name}
                            className="text-sm transition duration-200 hover:-translate-y-[3px] hover:text-[#77bd91]"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
                <a className="flex items-center gap-2.5 text-[11px] max-[600px]:text-[10px]" href="#accueil">
                    Retour en haut <FiArrowUpRight />
                </a>
            </div>
        </footer>
    )
}
