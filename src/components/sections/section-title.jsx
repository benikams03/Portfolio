export default function SectionTitle({ number, label, title, children }) {
    return (
        <div className="section-heading" data-reveal>
            <div>
                <p className="eyebrow"><span>{number} /</span> {label}</p>
                <h2>{title}</h2>
            </div>
            {children && <p className="section-intro">{children}</p>}
        </div>
    )
}
