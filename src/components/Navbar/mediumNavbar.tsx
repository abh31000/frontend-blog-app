import { useEffect, useState } from "react"

function MenuButton({handlestate}:any){
    return(
        <svg onClick={handlestate} className="my-auto cursor-pointer relative p-1 border-black bord box-content left-3" width="56" height="13" viewBox="0 0 28 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0H19" stroke="black" stroke-width="1.4" stroke-linecap="round"/>
                    <path d="M1 5H15" stroke="black" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
    )
}

function Menu(){
    return (
        <div className="relative font-extrabold font-[Guminert] select-none h-72 px-16 bg-white">
            <h1 className="text-[64px]" ><a href="#">Posts</a></h1>
            <h1 className="text-[64px]"><a href="#">Newletter</a></h1>
        </div>
    )
}


export default function MediumNavbar(){
    const [open, setOpen] = useState(false)

    
    function handleMenu(){
        if(open === false) return setOpen(true)
        else return setOpen(false) 
        
    }
    
    return(
        <>
            <div className="flex h-24 select-none px-16 w-full justify-between bg-white">
                <h1 className="select-none my-auto text-[40px] font-[Nokwy]"><a href="#"> BlOg<span className="text-transparent  stroke-black-1">osphere</span></a></h1>
                <MenuButton handlestate={handleMenu}></MenuButton>
            </div>
            {open ? <Menu></Menu>: ""}
        </>
    )
}