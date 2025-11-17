const Bouton = ({ outline, className, children, ...props }) => {
    return(<>
    <button
        className={`
            ${ outline ?
                'border bg-white hover:bg-indigo-100 duration-200 text-indigo-600 border-indigo-600 text-black py-2 px-4 rounded-xl text-sm font-semibold' :
                'bg-indigo-600 hover:bg-indigo-500 duration-200 border border-indigo-600 text-white py-2 px-4 rounded-xl text-sm font-semibold'
            } cursor-pointer flex items-center justify-center gap-2 shadow-sm shadow-indigo-200
            ${className}
            `}
        {...props}>
        {children}
    </button>
    </>)
}
export { Bouton };