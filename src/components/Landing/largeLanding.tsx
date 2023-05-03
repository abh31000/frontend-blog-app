export default function LargeLanding(){
    return(
        <>
            <div className="flex-col mx-16 tracking-wider -space-y-11 font-[Nokwy] mt-16 text-[80px] text-transparent stroke-black-1 selection:bg-black selection:text-transparent  selection:stroke-white-1 font-semibold">
                <h1>Life is Art - Embrace</h1>
                <h1>Your Creativity and</h1>
                <h1>Live Fully</h1>
            </div>

            <div className="flex justify-between selection:bg-black font-[Manrope] selection:text-white mt-10">
                <div className="flex-col space-y-3 leading-tight tracking-normal px-16">
                    <p>*Welcome to Blogosphere, where we believe that life is art<br></br>and that creativity is the key to living life to the fullest.</p>
                    <p>Whether you're an art lover, a creative professional, or simply<br></br>someone who wants to explore the beauty and complexity<br></br>of art and life, you've come to the right place.</p>
                </div>

                <div className="font-[Manrope] select-none hover:bg-black cursor-pointer transition duration-150 hover:text-white border-black border-t-2 border-l-2 border-b-2 p-5 pl-24 pr-16">
                    <div className="flex">
                        <h1 className="font-[Nokwy] relative right-[70px] bottom-2 space-x-3 text-4xl">x</h1>
                        <h1 className="relative right-[18px] font-semibold text-xl">Goodies comming up soon !</h1>
                    </div>

                    <h1 className="-mt-2">We opening an online store by next<br/>friday. Join the wainting list for 10% off </h1>
                </div>
            </div>
        </>
    )
}