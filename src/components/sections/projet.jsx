import Card_projet from "../card-projet.jsx"
import { dataprojet } from "../../data/data.js"

export default function Projet() {
    return(<>
    <div id="projets" className="bg-white px-4 md:px-36 py-16">
        
        <h2 className="text-center pb-6 text-3xl font-bold text-center">MES <spanc className="text-indigo-600">PROJETS</spanc></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            { dataprojet.map((value, index) => (
                <Card_projet key={index}
                    img={value.image}
                    titre={value.titre}
                    text={value.text}
                    type={value.type}
                    link={value.link}
                    />
            ))  }
        </div>

    </div>
    </>)
}