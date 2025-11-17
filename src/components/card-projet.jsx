import { Bouton } from "./bouton.jsx"
import { IoIosLink } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

export default function Card_projet({ img, titre, text, type, link  }){
    return(<>
    <div className="border border-gray-400/50 w-full p-2 rounded-lg" >
        <img src={img} className="rounded-sm w-full" />
        <div>
            <p className="text-sm py-2">
                <span className="text-indigo-600">{titre} - </span> {text}
            </p>
            { type === 'web' && <a href={link} target="_bank">
                <Bouton className="w-full">
                Visiter le site <IoIosLink /></Bouton></a> }
            { type === 'mobile' && <a href={link} download={`${titre}.apk`} >
                <Bouton className="w-full">
                Télécharger <FiDownload /></Bouton></a> }
        </div>
    </div>
    </>)
}