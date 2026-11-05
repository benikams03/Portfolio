import { useEffect, useRef, useState } from 'react'
import { FiAward, FiX } from 'react-icons/fi'
import Top from './components/layout/top.jsx'
import Head from './components/sections/head.jsx'
import Apropos from './components/sections/apropos.jsx'
import Experiance from './components/sections/experiance.jsx'
import Certification from './components/sections/certification.jsx'
import Projet from './components/sections/projet.jsx'
import Contact from './components/sections/contact.jsx'
import Bottom from './components/layout/bottom.jsx'
import './assets/styles/app.css'

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('accueil')
    const [selectedDocument, setSelectedDocument] = useState(null)
    const dialog = useRef(null)
    const documentButton = useRef(null)

    function openDocument(event, document) {
        documentButton.current = event.currentTarget
        setSelectedDocument(document)
    }

    useEffect(() => {
        const elements = document.querySelectorAll('[data-reveal]')
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver(entries => entries.forEach(entry => {
                if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
            }), { threshold: 0.1 })
            elements.forEach(element => { element.classList.add('reveal-ready'); observer.observe(element) })
            const sections = new IntersectionObserver(entries => entries.forEach(entry => {
                if (entry.isIntersecting) setActive(entry.target.id)
            }), { rootMargin: '-15% 0px -55% 0px' })
            document.querySelectorAll('main section[id]').forEach(element => sections.observe(element))
            return () => { observer.disconnect(); sections.disconnect() }
        }
    }, [])

    useEffect(() => {
        if (selectedDocument) dialog.current?.showModal()
        else if (dialog.current?.open) { dialog.current.close(); documentButton.current?.focus() }
    }, [selectedDocument])

    return <>
        <a className="fixed top-[-80px] left-3 z-[100] bg-mint p-3 focus:top-3" href="#main">Aller au contenu</a>

        <Top active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main id="main">
            <Head />
            <Apropos />
            <Experiance />
            <Certification onOpenDocument={openDocument} />
            <Projet />
            <Contact />
        </main>

        <Bottom />

        <dialog
            ref={dialog}
            className="fixed inset-0 m-auto max-h-[90dvh] w-[min(620px,calc(100%_-_32px))] overflow-auto rounded-lg border-0 bg-[#f9faf2] p-[25px] shadow-[0_30px_100px_#0005] backdrop:bg-[#0c232bd9] backdrop:backdrop-blur-[6px] max-[600px]:p-4"
            aria-labelledby="document-title"
            onCancel={() => setSelectedDocument(null)}
            onClose={() => setSelectedDocument(null)}
            onClick={event => { if (event.target === event.currentTarget) setSelectedDocument(null) }}
        >
            <button autoFocus className="absolute top-3 right-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-ink text-white" onClick={() => setSelectedDocument(null)} aria-label="Fermer l’aperçu"><FiX /></button>
            {selectedDocument?.type === 'diploma'
                ? <div className="border-4 border-double border-[#9aaf91] px-[25px] py-[45px] text-center max-[600px]:px-[15px] max-[600px]:py-[35px]">
                    <p className="flex items-center justify-center gap-2.5 text-[8px] leading-[1.6] font-[650] tracking-[2px]">PARCOURS ACADÉMIQUE</p>
                    <FiAward className="mx-auto my-[25px] text-[55px] text-[#6b8c5e]" />
                    <h2 id="document-title" className="mb-[25px] font-serif text-[38px] leading-[1.15] max-[600px]:text-[30px]">{selectedDocument.title}</h2>
                    <p className="text-[13px] text-muted">{selectedDocument.description}</p>
                    <h3 className="my-3.5 font-serif text-[29px] max-[600px]:text-[25px]">{selectedDocument.year}</h3>
                    <div className="mx-auto my-3.5 h-px w-[50px] bg-[#92a381]" />
                    <p className="text-[13px] text-muted">Le document de ce diplôme sera ajouté prochainement.</p>
                    <small className="mt-[18px] block text-[10px] leading-[1.6] text-[#677961]">Le fichier original n’est pas encore disponible dans le portfolio.</small>
                </div>
                : <div className="border-4 border-double border-[#9aaf91] px-[25px] py-[45px] text-center max-[600px]:px-[15px] max-[600px]:py-[35px]">
                    <p className="flex items-center justify-center gap-2.5 text-[8px] leading-[1.6] font-[650] tracking-[2px]">DEVKAMS · MODÈLE DE PRÉSENTATION</p>
                    <FiAward className="mx-auto my-[25px] text-[55px] text-[#6b8c5e]" />
                    <h2 id="document-title" className="mb-[25px] font-serif text-[38px] leading-[1.15] max-[600px]:text-[30px]">Certificat<br />de démonstration</h2>
                    <p className="text-[13px] text-muted">Exemple visuel pour le portfolio de</p>
                    <h3 className="my-3.5 font-serif text-[29px] max-[600px]:text-[25px]">Beni Mukungulu</h3>
                    <p className="text-[13px] text-muted">{selectedDocument?.title}</p>
                    <div className="mx-auto my-3.5 h-px w-[50px] bg-[#92a381]" />
                    <small className="block text-[10px] leading-[1.6] text-[#677961]">Ce document est un aperçu de design et ne constitue pas une certification réelle.</small>
                </div>}
        </dialog>
    </>
}
