export default function SectionTitle({ number, label, title, children }) {
    return (
        <div className="mb-[52px] flex items-end justify-between gap-[60px] max-[800px]:gap-[25px] max-[600px]:mb-[33px] max-[600px]:block" data-reveal>
            <div>
                <p className="mb-[18px] flex items-center gap-2.5 text-[11px] leading-[1.6] font-[650] tracking-[2px] max-[600px]:mb-[15px] max-[600px]:text-[9px]">
                    <span className="text-[#49755e]">{number} /</span> {label}
                </p>
                <h2 className="text-[clamp(32px,3.5vw,47px)] leading-[1.15] font-[550] tracking-[-1.7px] max-[800px]:text-[35px] max-[600px]:text-[33px] max-[600px]:tracking-[-1.2px]">{title}</h2>
            </div>
            {children && (
                <p className="max-w-[310px] pb-[3px] text-sm leading-[1.85] text-muted max-[800px]:max-w-[240px] max-[800px]:text-xs max-[600px]:mt-5 max-[600px]:max-w-[350px] max-[600px]:text-[13px]">
                    {children}
                </p>
            )}
        </div>
    )
}
