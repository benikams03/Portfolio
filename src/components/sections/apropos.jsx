import img from "./../../assets/photos/img-programmeur.jpg"

export default function Apropos() {
    return(<>
    <div id="apropos" className="bg-white flex gap-8 md:justify-between items-start max-md:flex-col px-4 md:px-36 py-20 max-md:pb-20">
        <div data-aos="fade-up" className="w-full">
            <img src={img} className="w-full rounded-xl" loading="lazy" />
        </div>
        <div className="w-full">
            <h2 data-aos="zoom-in" className="text-3xl font-bold">APROPOS <span className="text-indigo-600">DE MOI</span></h2>
            <p data-aos="fade-up" className="text-gray-600 mt-4">
                Je suis développeur web et mobile basé à Kinshasa, République Démocratique du Congo.
                Je crée des applications modernes, rapides et faciles à utiliser, en utilisant des technologies comme React, React Native, Node.js, TypeScript, Laravel, Slim. <br />

                Je travaille sur des projets du début à la fin, de la conception jusqu’au déploiement.
                Je suis passionné par la technologie, toujours prêt à apprendre de nouvelles choses et à relever des défis. <br />

                Avec mon expérience, mes projets réalisés et mes certifications, je suis prêt à contribuer à des solutions utiles et efficaces.
            </p>
        </div>
    </div>
    </>)
}