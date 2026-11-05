import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'

const links = [
    ['apropos', 'À propos'],
    ['experience', 'Expériences'],
    ['certificats', 'Certificats'],
    ['projets', 'Projets'],
]

const container = 'mx-auto w-[min(1200px,calc(100%_-_96px))] max-[1100px]:w-[calc(100%_-_64px)] max-[800px]:w-[calc(100%_-_40px)]'

export default function Top({ active, menuOpen, setMenuOpen }) {
    return (
        <header className="fixed inset-x-0 top-0 z-30 border-b border-[#ffffff14] bg-ink/95 text-[#fafafa] backdrop-blur-[18px]">
            <div className={`${container} flex h-[86px] max-[800px]:h-[72px] items-center justify-between gap-8`}>
                <a href="#accueil" className="text-[28px] font-[780] tracking-[-1.3px] whitespace-nowrap" aria-label="DevKams — accueil">
                    <span className="font-[430]">dev</span>
                    <span className="font-[430]">kams</span>
                    <i className="not-italic text-accent">.</i>
                </a>

                <nav
                    className={`flex items-center gap-[30px] text-[13px] max-[1100px]:gap-[19px] max-[1100px]:text-xs ${
                        menuOpen
                            ? 'max-[800px]:absolute max-[800px]:inset-x-0 max-[800px]:top-[72px] max-[800px]:flex-col max-[800px]:items-stretch max-[800px]:gap-5 max-[800px]:border-b max-[800px]:border-[#ffffff25] max-[800px]:bg-ink max-[800px]:p-6 max-[800px]:shadow-[0_20px_30px_#0002]'
                            : 'max-[800px]:hidden'
                    }`}
                    aria-label="Navigation principale"
                >
                    {links.map(([id, label]) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            aria-current={active === id ? 'location' : undefined}
                            onClick={() => setMenuOpen(false)}
                            className={`transition-colors duration-200 hover:text-accent max-[800px]:text-[15px] ${active === id ? 'text-accent' : ''}`}
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="#Contact"
                        className="ml-5 flex items-center gap-4 rounded border border-[#ffffff4d] px-[18px] py-3 max-[1100px]:ml-0 max-[800px]:justify-between"
                        onClick={() => setMenuOpen(false)}
                    >
                        Parlons de votre projet <FiArrowUpRight className="text-[18px]" />
                    </a>
                </nav>

                <button
                    className="hidden bg-transparent text-[25px] text-white max-[800px]:block"
                    aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </header>
    )
}
