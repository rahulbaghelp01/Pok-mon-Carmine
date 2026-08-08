
export default function Navbar(){

    return(
        <nav className="w-full h-20 flex items-center justify-between px-10  font-cormorant font-bold">

            <div>
                <button className=" text-[var(--gold)] bg-[var(--black)] w-20 h-10 rounded-xl">LOGO</button>
            </div>

            <div className="flex items-center justify-between gap-10 w-100 ">
                <button className="text-[var(--gold)] bg-[var(--black)] w-20 h-10 rounded-xl border border-transparent hover:border-[var(--gold)]  transition-all duration-300
                hover:-translate-y-1 hover:text-[var(--white)] hover:cursor-pointer">PLAY</button>
                <button className="text-[var(--gold)] bg-[var(--black)] w-20 h-10 rounded-xl border border-transparent hover:border-[var(--gold)]  transition-all duration-500
                hover:-translate-y-1 hover:text-[var(--white)] hover:cursor-pointer">FAV</button>
                <button className="text-[var(--gold)] bg-[var(--black)] w-20 h-10 rounded-xl border border-transparent hover:border-[var(--gold)]  transition-all duration-300
                hover:-translate-y-1 hover:text-[var(--white)] hover:cursor-pointer">PROFILE</button>
            </div>

        </nav>
    )
}