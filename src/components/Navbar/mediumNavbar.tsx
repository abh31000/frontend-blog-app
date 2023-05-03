export default function MediumNavbar(){
    return(
        <>
            <div className="flex h-24 select-none px-12 w-full justify-between bg-white">
                <h1 className="select-none my-auto text-[40px] font-[Nokwy]"><a href="#"> BlOg<span className="text-transparent  stroke-black-1">osphere</span></a></h1>
                <svg className="my-auto cursor-pointer relative p-1 border-black bord box-content left-3" width="56" height="13" viewBox="0 0 28 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0H21" stroke="black" stroke-width="1.4" stroke-linecap="round"/>
                    <path d="M1 5H17" stroke="black" stroke-width="1.4" stroke-linecap="round"/>
                </svg>


            </div>
        </>
    )
}