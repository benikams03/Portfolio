import { Bouton } from "./../bouton.jsx"
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoFolderOpenOutline } from "react-icons/io5";

export default function Head() {
    return(<>
    <div className="h-screen relative">
        <div className="h-full w-full max-md:px-6 px-68 flex gap-12 justify-between items-center">

            <div className="w-full flex flex-col items-center justify-center text-center">
                <h2 className="text-lg text-gray-500 font-semibold max-md:text-sm">Bonjours, je m'appelle </h2>
                <h1 className="text-5xl font-bold py-3 max-md:text-3xl"><span className="text-indigo-700">Beni Mukungulu</span><br />
                Je suis Développeur full-stack Web & Mobile</h1>
                <h3 className="text-lg text-gray-500 font-semibold max-md:text-sm">
                    Je conçois des applications modernes, performantes et responsives. 
                    Mon objectif : développer des solutions digitales fiables et évolutives.
                </h3>

                <div className="flex max-md:flex-col gap-2 mt-6 font-semibold w-full">
                    <a href="#projects" className="flex items-center gap-2 w-full">
                        <Bouton className="w-full" outline>
                        Voir Mes Projets
                        <IoFolderOpenOutline /></Bouton>
                    </a>
                    <a href="#Contact" className="w-full flex items-center gap-2">
                        <Bouton className="w-full">
                        Contact
                        <RiCustomerService2Fill size={18} /></Bouton>
                    </a>
                </div>
                
                <aside className="pt-8 flex gap-2 text-gray-800">
                    <a href="https://facebook.com/Beni.kams03" target="_blank"
                        className="text-3xl px-2 ">
                        <FaFacebookF />
                    </a>
                    <a href="https://wa.me/243890395930" target="_blank"
                        className="text-3xl px-2 ">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/benikams" target="_blank"
                        className="text-3xl px-2 ">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/beni-mukungulu-6872972ba?utm_source=share&utm_compaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"
                        className="text-3xl px-2 ">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/benikams03" target="_blank"
                        className="text-3xl px-2 ">
                        <FaGithub />
                    </a>
                </aside>
            </div>
            

        </div>
        <div className="white custom-shape-divider-bottom-1763164533">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
    </div>
    </>)
}