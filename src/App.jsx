import Layout from "./components/layout.jsx"
import Head from "./components/sections/head.jsx"
import Apropos from "./components/sections/apropos.jsx"
import Certification from "./components/sections/certification.jsx"
import Skils from "./components/sections/skils.jsx"
import Projet from "./components/sections/projet.jsx"

import { CiMap } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

export default function App() {

    const date = new Date()

    return(<>
        <Layout />
        
        <Head />
        <Apropos />
        <div className="px-6 md:px-28 w-full bg-white">
            <div className="border-b border-gray-300 w-full" />
        </div>
        <Skils />
        <Certification />
        <Projet />

        <footer id="Contact" className="px-4 md:px-34 py-12">

            <div className="grid grid-cols-1 md:grid-cols-3 ">
                <div className="w-full flex items-center flex-col text-center md:border-r md:border-gray-300">
                    <CiMap size={52} className="text-indigo-600"/>
                    <h3 className="py-3 text-2xl font-bold">Locatisation</h3>
                    <p className="text-gray-700">République démocratique du congo <br />
                        Kinshasa, Lemba</p>
                </div>
                <div className="w-full flex items-center flex-col text-center md:border-r md:border-gray-300">
                    <IoPhonePortraitOutline size={52} className="text-indigo-600"/>
                    <h3 className="py-3 text-2xl font-bold">Téléphone</h3>
                    <p className="text-gray-700">+243890395930</p>
                </div>
                <div className="w-full flex items-center flex-col text-center">
                    <MdMailOutline size={52} className="text-indigo-600"/>
                    <h3 className="py-3 text-2xl font-bold">Mail</h3>
                    <p className="text-gray-700">benikams03@gmail.com</p>
                </div>
            </div>
            <div className="w-full text-center border-t border-gray-300 mt-10">
                <p className="text-sm text-gray-600 pt-6">Copyright © {date.getFullYear()} Beni Mukungulu. Tous droits réservés.</p>
            </div>
        </footer>
    </>)
}