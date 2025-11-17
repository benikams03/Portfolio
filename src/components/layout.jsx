import { Bouton } from "./bouton.jsx";
import { FiDownload } from "react-icons/fi";

const Layout = () => {
    
    return(<div className="fixed w-full py-4 px-8 max-md:p-2 z-20">
    <header 
    className="
        shadow border border-gray-400/50 rounded-xl w-full bg-white 
        flex justify-between items-center py-3 px-4">

            <h2 className="font-bold text-2xl">
                Dev<span className="text-indigo-600">Kams</span>
            </h2>

            <nav className="flex items-center gap-5 max-md:hidden">
                <a href="#" class="hover:font-semibold text-gray-500 focus:text-indigo-600 focus:font-semibold">ACCEUIL</a>
                <a href="#apropos" class="hover:font-semibold text-gray-500 focus:text-indigo-600 focus:font-semibold">APROPOS</a>
                <a href="#skill" class="hover:font-semibold text-gray-500 focus:text-indigo-600 focus:font-semibold">SKILLS</a>
                <a href="#education" class="hover:font-semibold text-gray-500 focus:text-indigo-600 focus:font-semibold">PARCOURS</a>
                <a href="#projets" class="hover:font-semibold text-gray-500 focus:text-indigo-600 focus:font-semibold">PROJETS</a>
                <a href="#Contact" class="hover:font-semibold text-gray-500 focus:text-indigo-600 focus:font-semibold">CONTACT</a>
            </nav>
            
            
            <a href="./../assets/files/CV_Beni_Mukungulu.pdf"
                download="cv_beni_mukungulu.pdf"
                className="flex gap-2">
                <Bouton>
                Télécharger CV
                <FiDownload size={16} /></Bouton>
            </a>

    </header> 
    </div>)
} 
export default Layout;