import Card from "./card.jsx";

import Charmander from "../assets/pokemon-images/Charmander.jpg";
import Balbasauras from "../assets/pokemon-images/balbasauras.jpg";
import Squirtle from "../assets/pokemon-images/squirtle.jpg";

import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { lockSelection } from "../store/pokemonSlice.js";
import gsap from "gsap";

import { getPokemons } from "../api/authPageApi.js";

function StarterPokemon() {

    const [charmander, setCharmander] = useState({});
    const [bulbasaur, setBulbasaur] = useState({});
    const [squirtle, setSquirtle] = useState({})


    const dispatch = useDispatch();

    const selectionLocked = useSelector(
        (state) => state.pokemon.selectionLocked
    );

    const pokemons = useSelector(
        (state) => state.pokemon.pokemons
    );

    // Card refs
    const cardRef1 = useRef(null);
    const cardRef2 = useRef(null);
    const cardRef3 = useRef(null);

    // Prevent each card from animating more than once
    const hasFlipped1 = useRef(false);
    const hasFlipped2 = useRef(false);
    const hasFlipped3 = useRef(false);

    const handleCardHover = (cardRef, hasFlipped) => {
        if (hasFlipped.current) {
            return;
        }

        hasFlipped.current = true;

        const tl = gsap.timeline();

        tl.to(cardRef.current, {
            z: 20,
            duration: 0.2,
            ease: "power2.out",
        })
            .to(cardRef.current, {
                rotationY: 110,
                duration: 0.65,
                ease: "power3.in",
            })
            .to(cardRef.current, {
                rotationY: 180,
                z: 0,
                duration: 0.75,
                ease: "power3.out",
            });
    };

    const handleChooseOne = () => {
        if (pokemons[0]) {
            dispatch(lockSelection(true));
            return;
        }

        return;
    };

    const handleBorder = (id) => {
        if (pokemons[0] === id) {
            return "border-4 border-green-200";
        }

        return "border-4 border-transparent";
    };




    useEffect(() => {
        async function loadData() {
            try {
                const response = await getPokemons();

                if (!response.ok) {
                    alert("Failed to fetch Pokémon");
                    return;
                }

                const data = response.data;

                setBulbasaur(
                    data.find(
                        pokemon => pokemon.name.toLowerCase() === "bulbasaur"
                    )
                );

                setCharmander(
                    data.find(
                        pokemon => pokemon.name.toLowerCase() === "charmander"
                    )
                );

                setSquirtle(
                    data.find(
                        pokemon => pokemon.name.toLowerCase() === "squirtle"
                    )
                );

            } catch (error) {
                console.error(error);
            }
        }

        loadData();
    }, []);


    return (
        <div className="font-cinzel bg-[var(--brown)] w-[100vw] flex flex-col pt-10 lg:w-[60vw] 2xl:pt-25 xl:pt-25 xl:gap-8 items-center lg:gap-2 gap-8 p-2">

            {/* Heading */}
            <div className="flex flex-col items-center gap-1 justify-center">
                <p className="text-[var(--white)] xl:text-3xl text-xl max-[320px]:text-sm md:text-3xl">
                    Everything begins with a choice
                </p>

                <p className="text-[var(--white)]/80 text-sm font-cormorant text-base md:text-lg">
                    Choose your first companion and begin your journey.
                </p>
            </div>

            {/* Cards */}
            <div className="w-full overflow-x-auto snap-x snap-mandatory lg:overflow-hidden">

                <div className="flex justify-around items-center lg:w-full lg:gap-2 w-200 h-100">

                    {/* Charmander */}
                    <div className="snap-center shrink-0">
                        <Card
                            ref={cardRef1}
                            onMouseEnter={() =>
                                handleCardHover(
                                    cardRef1,
                                    hasFlipped1
                                )
                            }
                            className={handleBorder(1)}
                            pokemonsObject={bulbasaur}
                        />
                    </div>

                    {/* Bulbasaur */}
                    <div className="snap-center shrink-0">
                        <Card
                            ref={cardRef2}
                            onMouseEnter={() =>
                                handleCardHover(
                                    cardRef2,
                                    hasFlipped2
                                )
                            }
                            className={handleBorder(4)}
                            pokemonsObject={charmander}
                        />
                    </div>

                    {/* Squirtle */}
                    <div className="snap-center shrink-0">
                        <Card
                            ref={cardRef3}
                            onMouseEnter={() =>
                                handleCardHover(
                                    cardRef3,
                                    hasFlipped3
                                )
                            }
                            className={handleBorder(7)}
                            pokemonsObject={squirtle}
                        />
                    </div>

                </div>
            </div>

            {/* Choose button */}
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
    );
}

export default StarterPokemon;