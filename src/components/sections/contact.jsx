import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
    return (
        <section id="Contact" className="contact-section">
            <div className="container">
                <div className="contact-top" data-reveal>
                    <div>
                        <p className="eyebrow">05 / ET SI ON CRÉAIT QUELQUE CHOSE ?</p>
                        <h2>Votre prochaine idée<br />commence <span>ici.</span></h2>
                    </div>
                    <a href="mailto:benikams03@gmail.com" className="contact-circle" aria-label="Écrire à Beni par email"><FiArrowUpRight /></a>
                </div>
                <div className="contact-details" data-reveal>
                    <a href="mailto:benikams03@gmail.com">
                        <FiMail />
                        <span><small>ÉCRIVEZ-MOI</small>benikams03@gmail.com</span>
                    </a>
                    <a href="tel:+243890395930">
                        <FiPhone />
                        <span><small>APPELEZ-MOI</small>+243 890 395 930</span>
                    </a>
                    <div>
                        <FiMapPin />
                        <span><small>RETROUVEZ-MOI</small>Kinshasa, Lemba · RDC</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
