import Card_certificat from "../card-certifcat"
import { dataCertification } from "../../data/data.js"

export default function Certification() {
    return(<>
    <div id="education" className="py-10">
        <h2 className="text-center pt-12 pb-6 text-3xl font-bold">MON PARCOURS <spanc className="text-indigo-600">& CERTIFICATS</spanc></h2>
        
        <div className="flex max-md:flex-col gap-8 justify-center items-start px-6 md:px-38">
            <div className="w-full">
                <h2 className="font-semibold text-xl">Education</h2>
                <div className="flex flex-col gap-6 border-l-2 border-gray-300 my-8">
                    { dataCertification.map((value, index) => (
                        < Card_certificat key={index}
                            date={value.date}
                            titre={value.titre}
                            description={value.description}/>
                    )) } 
                </div>
            </div>
            <div className="w-full">
                <h2 className="font-semibold text-xl">Expérience</h2>
                <div className="flex flex-col gap-6 border-l-2 border-gray-300 my-8">
                    

                </div>
            </div>
        </div>
    </div>
    
    </>)
}