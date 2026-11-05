import { useEffect, useState } from 'react'
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

    return <>
        <a className="fixed top-[-80px] left-3 z-[100] bg-accent p-3 focus:top-3" href="#main">Aller au contenu</a>

        <Top active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main id="main">
            <Head />
            <Apropos />
            <Experiance />
            <Certification />
            <Projet />
            <Contact />
        </main>

        <Bottom />
    </>
}
