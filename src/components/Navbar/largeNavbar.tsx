export default function LargeNavbar(){
    return(
        <>
            <div className="flex justify-between px-16 h-24 bg-white">
                <h1 className="select-none my-auto text-[40px] font-[Nokwy]"><a href="#"> BlOg<span className="text-transparent  stroke-black-1">osphere</span></a></h1>
                <div className="flex select-none my-auto space-x-11 font-extrabold font-[Guminert] ">
                    <h1 className="text-[64px]" ><a href="#">Posts</a></h1>
                    <h1 className="text-[64px]"><a href="#">Newletter</a></h1>
                </div>
                
            </div>
        </>
    )
}