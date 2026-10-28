import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiArrowDown, FiDownload, FiMenu, FiX, FiCode, FiSmartphone, FiLayers, FiMapPin, FiMail, FiPhone, FiAward, FiBriefcase, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'
import portrait from './assets/photos/Sans titre-1.jpg'
import { dataCertification, dataprojet, experiences, certificates, skillGroups } from './data/data.js'
import './assets/styles/app.css'

const links = [['apropos', 'À propos'], ['experience', 'Expériences'], ['certificats', 'Certificats'], ['projets', 'Projets']]
const socials = [[FiGithub, 'GitHub', 'https://github.com/benikams03'], [FiLinkedin, 'LinkedIn', 'https://www.linkedin.com/in/beni-mukungulu-6872972ba'], [FaWhatsapp, 'WhatsApp', 'https://wa.me/243890395930'], [FaInstagram, 'Instagram', 'https://www.instagram.com/benikams'], [FaFacebookF, 'Facebook', 'https://facebook.com/Beni.kams03']]

function SectionTitle({ number, label, title, children }) {
  return <div className="section-heading" data-reveal><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}</h2></div>{children && <p className="section-intro">{children}</p>}</div>
}

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
    <header className="site-header"><div className="container nav-bar">
      <a href="#accueil" className="brand" aria-label="DevKams — accueil">dev<span>kams</span><i>.</i></a>
      <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Navigation principale">
        {links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a href="#Contact" className="nav-contact" onClick={() => setMenuOpen(false)}>Parlons de votre projet <FiArrowUpRight /></a>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button>
    </div></header>
    <main id="main">
      <section id="accueil" className="hero"><div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> DÉVELOPPEUR FULL-STACK · KINSHASA</p>
          <p className="hero-hello">Bonjour, moi c’est Beni.</p>
          <h1>Des idées au code.<br /><span>Des solutions<br />qui comptent.</span></h1>
          <p className="hero-description">Je suis <strong>Beni Mukungulu</strong>, développeur web, mobile & desktop. Je transforme vos idées en expériences digitales utiles, intuitives et soignées.</p>
          <div className="hero-actions"><a className="button button-mint" href="#projets">Explorer mes projets <FiArrowUpRight /></a><a className="text-link" href="/CV_beni_mukungulu.pdf" download>Télécharger mon CV <FiDownload /></a></div>
          <div className="hero-bottom"><div className="social-links">{socials.slice(0, 3).map(([Icon, name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}><Icon /></a>)}</div><span>Du premier concept au déploiement.</span></div>
        </div>
        <div className="portrait-composition" data-reveal>
          <div className="portrait-outline" aria-hidden="true" />
          <div className="portrait-frame"><img src={portrait} alt="Beni Mukungulu, développeur full-stack à Kinshasa" fetchPriority="high" /><div className="portrait-caption"><span>BENI MUKUNGULU</span><span>Développeur & créateur de solutions</span></div></div>
          <div className="portrait-sticker"><FiCode /><span>Une idée.<br /><strong>Une solution.</strong></span></div>
          <span className="portrait-coordinate">BENI MUKUNGULU · KINSHASA, RDC</span>
        </div>
      </div><div className="container hero-footer"><span>WEB / MOBILE / DESKTOP</span><a href="#apropos">Un peu plus sur moi <FiArrowDown /></a><span>CONÇU AVEC INTENTION</span></div></section>

      <section id="apropos" className="section about-section"><div className="container">
        <SectionTitle number="01" label="À PROPOS" title={<>La technique au service<br />de vos idées.</>}>Une approche complète du développement, avec la même attention portée au code et à l’expérience utilisateur.</SectionTitle>
        <div className="about-grid"><div className="about-copy" data-reveal><p>Basé à <strong>Kinshasa, en République démocratique du Congo</strong>, je conçois des applications modernes, rapides et faciles à utiliser.</p><p>De la conception au déploiement, j’aime comprendre un besoin, structurer une solution et lui donner vie. React, React Native, Node.js, TypeScript ou Laravel : je choisis les outils adaptés à chaque projet.</p><a className="text-link dark-link" href="#Contact">Faisons connaissance <FiArrowUpRight /></a></div><div className="services">{[[FiCode, 'Développement web', 'Des interfaces responsives et des applications pensées pour leurs utilisateurs.'], [FiSmartphone, 'Applications mobiles', 'Des expériences accessibles sur mobile avec React Native.'], [FiLayers, 'Solutions desktop', 'Des outils métier concrets pour simplifier le travail au quotidien.']].map(([Icon, title, text]) => <article className="service-row" key={title} data-reveal><Icon /><div><h3>{title}</h3><p>{text}</p></div><FiArrowUpRight /></article>)}</div></div>
        <div id="skill" className="skills-block"><div data-reveal><p className="eyebrow">MA BOÎTE À OUTILS</p><h3>Les technologies<br />avec lesquelles je crée.</h3></div><div className="skill-groups">{skillGroups.map(group => <div key={group.title} data-reveal><h4>{group.title}</h4><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div>
      </div></section>

      <section id="experience" className="section experience-section"><div className="container">
        <SectionTitle number="02" label="EXPÉRIENCES" title={<>Un parcours qui<br />se construit en pratique.</>}>Les entreprises, les missions et les rôles qui jalonnent mon parcours professionnel.</SectionTitle>
        <div className="timeline">{experiences.map(experience => <article className="experience-row" key={experience.id} data-reveal><div className="experience-period"><span className="sample-label">Exemple de présentation</span><p>{experience.period}</p><span>{experience.duration}</span></div><div className="timeline-marker"><FiBriefcase /></div><div className="experience-content"><p className="company">{experience.company}</p><h3>{experience.role}</h3><p>{experience.description}</p><div className="tags">{experience.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></article>)}</div>
        <p className="sample-note">Cette expérience est illustrative. Elle sera remplacée par les entreprises, postes et dates de mon parcours.</p>
      </div></section>

      <section id="certificats" className="section learning-section"><div className="container">
        <SectionTitle number="03" label="FORMATION & CERTIFICATS" title={<>Apprendre. Pratiquer.<br />Continuer à évoluer.</>}>Mon parcours académique et un espace dédié aux certifications qui l’enrichissent.</SectionTitle>
        <div className="learning-grid">
          <div id="education" className="education-list" data-reveal>
            <p className="eyebrow">PARCOURS ACADÉMIQUE</p>
            {[...dataCertification].reverse().map(item => <article key={item.titre}>
              <span>{item.date}</span><h3>{item.titre}</h3><p>{item.description}</p>
              {item.documentUrl
                ? <a className="text-link dark-link" href={item.documentUrl} target="_blank" rel="noreferrer" aria-label={`Voir le diplôme : ${item.titre}`}>Voir le diplôme <FiArrowUpRight /></a>
                : <button className="text-link dark-link" onClick={event => openDocument(event, { type: 'diploma', title: item.titre, description: item.description, year: item.date })} aria-label={`Voir le diplôme : ${item.titre}`}>Voir le diplôme <FiArrowUpRight /></button>}
            </article>)}
          </div>
          <div className="certificate-area">
            {certificates.map(certificate => <article className="certificate-card" key={certificate.id} data-reveal>
              <div className="certificate-preview" aria-hidden="true"><div className="mini-certificate"><span>DEVKAMS · APERÇU</span><FiAward /><strong>CERTIFICAT</strong><span>DE DÉMONSTRATION</span><div className="certificate-line" /><b>Beni Mukungulu</b><small>{certificate.title}</small></div><span className="preview-label">EXEMPLE</span></div>
              <div className="certificate-info"><span className="sample-label">Certificat de démonstration</span><h3>{certificate.title}</h3><p>{certificate.issuer} · {certificate.year}</p><button className="text-link dark-link" onClick={event => openDocument(event, { ...certificate, type: 'certificate' })} aria-label={`Voir le certificat : ${certificate.title}`}>Voir le certificat <FiArrowUpRight /></button></div>
            </article>)}
          </div>
        </div>
      </div></section>

      <section id="projets" className="section projects-section"><div className="container">
        <SectionTitle number="04" label="SÉLECTION DE PROJETS" title={<>Du code, mais surtout<br />des projets concrets.</>}>Gestion, tourisme, événementiel : quelques réalisations qui donnent forme à mon travail.</SectionTitle>
        <div className="project-grid">{dataprojet.map((project, index) => <article className="project-card" key={project.titre} data-reveal><a className="project-image" href={project.link} target="_blank" rel="noreferrer" aria-label={`Découvrir ${project.titre} (nouvel onglet)`}><img src={project.image} alt={`Aperçu du projet ${project.titre}`} loading="lazy" /><span className="project-open"><FiArrowUpRight /></span></a><div className="project-meta"><span>0{index + 1} / {index === 0 ? 'APPLICATION MÉTIER' : 'APPLICATION WEB'}</span><span>↗</span></div><h3><a href={project.link} target="_blank" rel="noreferrer">{project.titre}</a></h3><p>{project.text}</p></article>)}</div>
      </div></section>

      <section id="Contact" className="contact-section"><div className="container"><div className="contact-top" data-reveal><div><p className="eyebrow">05 / ET SI ON CRÉAIT QUELQUE CHOSE ?</p><h2>Votre prochaine idée<br />commence <span>ici.</span></h2></div><a href="mailto:benikams03@gmail.com" className="contact-circle" aria-label="Écrire à Beni par email"><FiArrowUpRight /></a></div><div className="contact-details" data-reveal><a href="mailto:benikams03@gmail.com"><FiMail /><span><small>ÉCRIVEZ-MOI</small>benikams03@gmail.com</span></a><a href="tel:+243890395930"><FiPhone /><span><small>APPELEZ-MOI</small>+243 890 395 930</span></a><div><FiMapPin /><span><small>RETROUVEZ-MOI</small>Kinshasa, Lemba · RDC</span></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#accueil">dev<span>kams</span><i>.</i></a><p>© {new Date().getFullYear()} Beni Mukungulu. Tous droits réservés.</p><div className="social-links">{socials.map(([Icon, name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}><Icon /></a>)}</div><a className="back-top" href="#accueil">Retour en haut <FiArrowUpRight /></a></div></footer>
    <dialog ref={dialog} className="certificate-dialog" aria-labelledby="document-title" onCancel={() => setSelectedDocument(null)} onClose={() => setSelectedDocument(null)} onClick={event => { if (event.target === event.currentTarget) setSelectedDocument(null) }}>
      <button autoFocus className="dialog-close" onClick={() => setSelectedDocument(null)} aria-label="Fermer l’aperçu"><FiX /></button>
      {selectedDocument?.type === 'diploma'
        ? <div className="full-certificate diploma-placeholder"><p className="eyebrow">PARCOURS ACADÉMIQUE</p><FiAward /><h2 id="document-title">{selectedDocument.title}</h2><p>{selectedDocument.description}</p><h3>{selectedDocument.year}</h3><div className="certificate-line" /><p>Le document de ce diplôme sera ajouté prochainement.</p><small>Le fichier original n’est pas encore disponible dans le portfolio.</small></div>
        : <div className="full-certificate"><p className="eyebrow">DEVKAMS · MODÈLE DE PRÉSENTATION</p><FiAward /><h2 id="document-title">Certificat<br />de démonstration</h2><p>Exemple visuel pour le portfolio de</p><h3>Beni Mukungulu</h3><p>{selectedDocument?.title}</p><div className="certificate-line" /><small>Ce document est un aperçu de design et ne constitue pas une certification réelle.</small></div>}
    </dialog>
  </>
}
