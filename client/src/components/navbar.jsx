 
import PokeballBackpack from './PokeballBackpack';

export default function Navbar(){

    return(
        <nav className="w-full h-20 flex items-center justify-between px-10  font-cormorant font-bold bg-[image:var(--primary)] border border-[var(--gold)]/30 shadow-lg shadow-black/40 border-b-black/60">

            <div className="hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer drop-shadow-md">
                <PokeballBackpack size={60} />
            </div>

            <div className="flex items-center justify-between gap-10 w-100 font-cormorant font-bold text-[var(--text)]">
                <button className="border-2 border-[var(--gold)]/90 shadow-lg shadow-black/40 w-28 h-10 bg-[image:var(--paper)] px-4 outline-none transition-all duration-300 hover:border-[var(--white)] hover:-translate-y-0.5 rounded cursor-pointer tracking-wide hover:shadow-lg">
                PLAY
                </button>
                <button className="border border-[var(--gold)] w-28 h-10 bg-[image:var(--paper)] px-4 outline-none transition-all duration-300 hover:border-[var(--white)] focus:border-white hover:shadow-lg hover:-translate-y-0.5  rounded cursor-pointer shadow-md shadow-black/40 tracking-wide">FAV</button>
                <button className="border border-[var(--gold)] w-28 h-10 bg-[image:var(--paper)] px-4 outline-none transition-all duration-300 hover:border-[var(--white)] focus:border-white hover:shadow-lg hover:-translate-y-0.5  rounded cursor-pointer shadow-md shadow-black/40 tracking-wide">PROFILE</button>
            </div>

        </nav>
    )
}