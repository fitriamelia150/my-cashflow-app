export default function Modal({children} : any){
    return (
        <div className="absolute top-0 left-0 w-full h-full z-50">
            <div className="w-full h-full bg-black opacity-55"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}