import Navbar from "../components/navbar.jsx";
import PokemonCard from "../components/profile-pagecard.jsx";
import EditIcon from "../assets/svg-border/edit.jsx";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { validateToken } from "../api/authPageApi.js";
import { getUserData } from "../api/mainPageApi.js";

import { setUser } from "../store/userSlice.js";
import { setPokemons } from "../store/pokemonSlice.js";


export default function Profile() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.user.user);
    const pokemons = useSelector((state) => state.pokemon.pokemons);

    const username = user?.username || "Unknown";
    const gamingId = user?.gamingId || "Unknown";


    useEffect(() => {

        const initializeUser = async () => {

            const result = await validateToken();

            if (!result.ok) {
                navigate("/auth");
                return;
            }

            const userData = await getUserData();

            dispatch(setUser(userData));

            dispatch(
                setPokemons(
                    userData.pokemon.map((item) => item.pokemon)
                )
            );
        };

        initializeUser();

    }, []);


    return (
        <main className="flex flex-col bg-[image:var(--paper)] bg-cover min-h-screen items-center gap-10 font-cinzel">

            <Navbar />

            <p className="text-xl font-bold mb-2">
                Trainer Information
            </p>


            {/* Trainer Information */}
            <section className="w-1/2 max-w-5xl mx-auto mt-5 flex justify-between items-center">

                {/* Username */}
                <div className="flex items-center gap-2">

                    <label htmlFor="name">
                        Name:
                    </label>

                    <input
                        className="border-b-2 border-black bg-transparent outline-none px-2 w-48"
                        type="text"
                        id="name"
                        name="name"
                        value={username}
                        readOnly
                    />

                    <button className="p-1 bg-transparent border-none">
                        <EditIcon />
                    </button>

                </div>


                {/* Gaming ID */}
                <div className="flex items-center gap-2">

                    <label htmlFor="gamingId">
                        Gaming ID:
                    </label>

                    <input
                        className="border-b-2 border-black bg-transparent outline-none px-2 w-48"
                        type="text"
                        id="gamingId"
                        name="gamingId"
                        value={gamingId}
                        readOnly
                    />

                </div>

            </section>


            {/* Pokemon Collection */}
            <section className="flex flex-col w-1/2 max-w-5xl justify-center mt-2">

                <div className="flex flex-col items-center mb-4">

                    <p className="text-xl font-bold mb-4 mt-2">
                        YOUR COLLECTION
                    </p>

                    <div className="grid grid-cols-3 gap-10 justify-items-center mt-4">

                        {pokemons.length > 0 ? (
                            pokemons.map((pokemon) => (
                                <PokemonCard
                                    key={pokemon.id}
                                    pokemon={pokemon}
                                />
                            ))
                        ) : (
                            <p className="col-span-3">
                                You haven't collected any Pokémon yet.
                            </p>
                        )}

                    </div>

                </div>

            </section>

        </main>
    );
}