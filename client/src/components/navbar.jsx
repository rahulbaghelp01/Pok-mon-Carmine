import { useState } from 'react';
import PokeballBackpack from './PokeballBackpack';
import ScrollPanel from './ScrollPanel';
import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";

export default function Navbar() {

    const user = useSelector((state) => state.user.user);
    const pokeballCount = user?.pokeballs ?? 0;

    const pokemons = useSelector((state) => state.pokemon.pokemons);

    const [scrollOpen, setScrollOpen] = useState(false);

    return (
        <nav className="w-full h-20 flex items-center justify-between gap-2 px-2 sm:gap-3 sm:px-4 md:gap-5 md:px-6 lg:gap-7 lg:px-8 xl:gap-0 xl:px-10 font-cormorant font-bold bg-[image:var(--primary)] border border-[var(--gold)]/30 shadow-lg shadow-black/40 border-b-black/60">

            {/* relative wrapper: this is what makes the scroll appear
                "just below" the backpack, regardless of where the backpack
                sits in the layout */}
            <div className="relative ">
                <div
                    onClick={() => setScrollOpen((prev) => !prev)}
                    className="hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer drop-shadow-md"
                >
                    <PokeballBackpack size={60} />
                </div>

                <ScrollPanel
                    isOpen={scrollOpen}
                    pokeballCount={pokeballCount}
                    pokemons={pokemons}
                    className="absolute top-full left-0 z-50"
                />
            </div>

            <div className="flex min-w-0 items-center justify-end gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10 xl:w-100 font-cormorant font-bold text-[var(--text)]">
                <Link to="/">
                    <button className="border-2 border-[var(--gold)]/90 shadow-lg shadow-black/40 w-16 h-8 bg-[image:var(--paper)] px-1 text-xs outline-none transition-all duration-300 hover:border-[var(--white)] hover:-translate-y-0.5 rounded cursor-pointer tracking-wide hover:shadow-lg sm:w-20 sm:h-9 sm:px-2 sm:text-sm md:w-24 md:h-10 md:px-3 lg:w-28 lg:px-4 xl:w-28 xl:h-10 xl:px-4 xl:text-base">
                        PLAY
                    </button>
                </Link>

                <Link to="/profile">
                    <button className="border border-[var(--gold)] w-16 h-8 bg-[image:var(--paper)] px-1 text-xs outline-none transition-all duration-300 hover:border-[var(--white)] focus:border-white hover:shadow-lg hover:-translate-y-0.5 rounded cursor-pointer shadow-md shadow-black/40 tracking-wide sm:w-20 sm:h-9 sm:px-2 sm:text-sm md:w-24 md:h-10 md:px-3 lg:w-28 lg:px-4 xl:w-28 xl:h-10 xl:px-4 xl:text-base">
                        PROFILE
                    </button>
                </Link>
            </div>

        </nav>
    )
}