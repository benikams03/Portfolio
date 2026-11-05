import { skillGroups } from '../../data/data.js'

const eyebrow = 'flex items-center gap-2.5 text-[11px] leading-[1.6] font-[650] tracking-[2px]'
const tag = 'rounded border border-[#e8e8e6] bg-[#ffffff45] px-2.5 py-1.5 text-[11px] text-[#6b6b6b] max-[600px]:px-[7px] max-[600px]:py-[5px] max-[600px]:text-[10px]'

export default function Skills() {
    return (
        <div className="mt-20 grid grid-cols-[1fr_2fr] gap-[70px] border-t border-line pt-[42px] max-[800px]:grid-cols-[1fr_1.7fr] max-[800px]:gap-[35px] max-[600px]:mt-[45px] max-[600px]:grid-cols-1 max-[600px]:gap-[25px] max-[600px]:pt-[30px]" id="skill">
            <div data-reveal>
                <p className={eyebrow}>MA BOÎTE À OUTILS</p>
                <h3 className="mt-[15px] text-2xl leading-[1.25] font-[520] tracking-[-0.6px]">Les technologies<br />avec lesquelles je crée.</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-[25px] max-[800px]:gap-[22px] max-[600px]:gap-x-4 max-[600px]:gap-y-[25px]">
                {skillGroups.map(group => (
                    <div key={group.title} data-reveal>
                        <h4 className="mb-[13px] text-xs font-semibold max-[600px]:text-[11px]">{group.title}</h4>
                        <div className="flex flex-wrap gap-[7px] max-[600px]:gap-[5px]">
                            {group.items.map(item => <span className={tag} key={item}>{item}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
