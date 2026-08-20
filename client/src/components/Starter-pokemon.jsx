import Card from "./card.jsx"

import Charmander from "../assets/pokemon-images/Charmander.jpg"
import Balbasauras from "../assets/pokemon-images/balbasauras.jpg"
import Squirtle from "../assets/pokemon-images/squirtle.jpg"

import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { lockSelection } from "../store/pokemonSlice.js"



function StarterPokemon() {

    const dispatch = useDispatch();

    const selectionLocked = useSelector((state) => state.pokemon.selectionLocked);

    const pokemons = useSelector((state) => state.pokemon.pokemons);

    const handleChooseOne = () => {
        if (pokemons[0]) {
            dispatch(lockSelection(true))
            return
        }
        return
    }



    const handleBorder = (id) => {
        if (pokemons[0] === id) {
            return "border-4 border-green-200";
        }

        return "border-4 border-transparent";
    };



    return (
        <div className="font-cinzel bg-[var(--brown)] w-[100vw] flex flex-col pt-10 items-center gap-8 p-2">
            <div className="flex flex-col items-center gap-1 justify-center">
                <p className="text-[var(--white)] text-xl max-[320px]:text-sm md:text-3xl">
                    Everything begins with a choice
                </p>
                <p className="text-[var(--white)]/80 text-sm font-cormorant text-base md:text-lg">
                    Choose your first companion and begin your journey.
                </p>
            </div>
            <div className="w-full overflow-x-auto snap-x snap-mandatory">
            <div className=" flex justify-around items-center w-200 h-100">
                <div className="snap-center shrink-0">
                <Card className={handleBorder(4)} id={4} name="Charmandar" image={Charmander} />
                </div>
                <div className="snap-center shrink-0">
                <Card className={handleBorder(1)} id={1} name="Balbasauras" />
                </div>
                <div className="snap-center shrink-0">
                <Card className={handleBorder(7)} id={7} name="Squirtle" />
                </div>
            </div>
            </div>
            <button
                type="submit"
                onClick={handleChooseOne}
                className={`${selectionLocked ? "bg-green-500" : "bg-red-500"} 
                
                text-[var(--black)]
                p-2 px-8
                border border-[var(--gold)]
                hover:border-black
                hover:text-[var(--white)]
                hover:-translate-y-1
                hover:brightness-110
                hover:cursor-pointer
                transition-all duration-300
                rounded
                `}
            >
                Choose One
            </button>
        </div>
    )
}

export default StarterPokemon