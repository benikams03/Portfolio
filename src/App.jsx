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
        <a className="skip-link" href="#main">Aller au contenu</a>

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

        <dialog ref={dialog} className="certificate-dialog" aria-labelledby="document-title" onCancel={() => setSelectedDocument(null)} onClose={() => setSelectedDocument(null)} onClick={event => { if (event.target === event.currentTarget) setSelectedDocument(null) }}>
            <button autoFocus className="dialog-close" onClick={() => setSelectedDocument(null)} aria-label="Fermer l’aperçu"><FiX /></button>
            {selectedDocument?.type === 'diploma'
                ? <div className="full-certificate diploma-placeholder"><p className="eyebrow">PARCOURS ACADÉMIQUE</p><FiAward /><h2 id="document-title">{selectedDocument.title}</h2><p>{selectedDocument.description}</p><h3>{selectedDocument.year}</h3><div className="certificate-line" /><p>Le document de ce diplôme sera ajouté prochainement.</p><small>Le fichier original n’est pas encore disponible dans le portfolio.</small></div>
                : <div className="full-certificate"><p className="eyebrow">DEVKAMS · MODÈLE DE PRÉSENTATION</p><FiAward /><h2 id="document-title">Certificat<br />de démonstration</h2><p>Exemple visuel pour le portfolio de</p><h3>Beni Mukungulu</h3><p>{selectedDocument?.title}</p><div className="certificate-line" /><small>Ce document est un aperçu de design et ne constitue pas une certification réelle.</small></div>}
        </dialog>
    </>
}
