export default function Card_certificat({ date, titre, description }) {
    return(<>
    <div className="p-6 ml-6 bg-white rounded-xl shadow/10 text-gray-500 relative">
        <div className="absolute border-b-2 border-indigo-600 w-10 -left-7 top-13 -z-10"></div>
        <div className="absolute border-2 bg-indigo-100 rounded-full p-2 border-indigo-600 -left-9 top-11 z-10"></div>
        <h5 className="text-sm">{date}</h5>
        <h3 className="text-lg font-semibold text-indigo-600">{titre}</h3>
        <h5 className="text-sm">{description}</h5>
    </div>
    </>)
}