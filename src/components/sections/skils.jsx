import { skillGroups } from '../../data/data.js'

export default function Skills() {
    return (
        <div id="skill" className="skills-block">
            <div data-reveal>
                <p className="eyebrow">MA BOÎTE À OUTILS</p>
                <h3>Les technologies<br />avec lesquelles je crée.</h3>
            </div>
            <div className="skill-groups">
                {skillGroups.map(group => (
                    <div key={group.title} data-reveal>
                        <h4>{group.title}</h4>
                        <div className="tags">
                            {group.items.map(item => <span key={item}>{item}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
