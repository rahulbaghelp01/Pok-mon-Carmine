import Card from "./card.jsx"

import Charmander from "../assets/pokemon-images/Charmander.jpg"
import Balbasauras from "../assets/pokemon-images/balbasauras.jpg"
import Squirtle from "../assets/pokemon-images/squirtle.jpg"

import { useState } from "react"
import { useSelector,useDispatch } from 'react-redux';
import { lockSelection } from "../store/pokemonSlice.js"



function StarterPokemon() {

    const dispatch = useDispatch();

    const handleChooseOne = ()=>{
        dispatch(lockSelection(true))
    } 

    const pokemons = useSelector((state) => state.pokemon.pokemons);

    const handleBorder = (id) => {
        if(pokemons[0]===id){
            return `border-4 border-green-200`
        }
        return ""
    }



    return (
        <div className="font-cinzel bg-[var(--brown)] w-[60vw] flex flex-col pt-25 items-center gap-8  pl-10">
            <div className="flex flex-col items-center gap-2  ">
                <p className="text-[var(--white)] text-3xl ">
                    Everything begins with a choice
                </p>
                <p className="text-[var(--white)]/80 text- xl font-cormorant text-lg">
                    Choose your first companion and begin your journey.
                </p>
            </div>

            <div className=" flex justify-around items-center w-200 h-100">
                <Card className={handleBorder(4)} id={4} name="Charmandar" image={Charmander} />
                <Card className={handleBorder(1)} id={1} name="Balbasauras" />
                <Card className={handleBorder(7)} id={7} name="Squirtle" />
            </div>
            <button
                type="submit"
                onClick={handleChooseOne}
                className="
                bg-red-500
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
                "
            >
                Choose One
            </button>
        </div>
    )
}

export default StarterPokemon