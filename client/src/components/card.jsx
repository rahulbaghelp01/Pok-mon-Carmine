import frame from "../assets/svg-border/frame.svg";
import { addSelectedPokemon } from "../store/pokemonSlice.js";
import { useDispatch, useSelector } from "react-redux";
import CardBack from "../components/POKEMONCARD-backside";

function Card({ className, id, name, image, type, hp, attack }) {
    const dispatch = useDispatch();

    const selectionLocked = useSelector(
        (state) => state.pokemon.selectionLocked
    );

    const handleSelected = () => {
        if (selectionLocked) return;

        dispatch(addSelectedPokemon(id));
        console.log(`saved ${id}`);
    };

    return (
        <div className="[perspective:1000px]">

            <div
                className="
                    relative
                    h-90 w-60
                    lg:h-60 lg:w-45
                    xl:h-90 xl:w-60
                    [transform-style:preserve-3d]
                "
            >

                {/* FRONT */}
                <div
                    onClick={handleSelected}
                    className={`
                        ${className}
                        absolute inset-0
                        h-90 w-60
                        lg:h-60 lg:w-45
                        xl:h-90 xl:w-60
                        p-2
                        bg-[var(--gold)]
                        rounded
                        hover:cursor-pointer
                        [backface-visibility:hidden]
                    `}
                >
                    <div className="relative h-full w-full bg-[image:var(--paper)]">

                        <div className="h-[60%] w-full relative">

                            <div className="absolute top-0 left-0 w-48 h-14 lg:w-40 lg:h-12 overflow-hidden">
                                <img
                                    src={frame}
                                    className="absolute left-[-42px] top-[-4px] lg:left-[-35px] lg:top-[-3px]"
                                />
                            </div>

                            <p className="absolute top-0 left-1 text-[var(--gold)] font-bold lg:text-sm">
                                {name}
                            </p>

                            <img
                                className="w-full h-full object-cover"
                                src={image}
                                alt={`${name} img`}
                            />

                        </div>

                        <div className="flex flex-col justify-between h-[40%] p-4 lg:p-3 gap-1 text-[var(--text)] font-cormorant text-sm lg:text-xs">
                            <p>Name: {name}</p>
                            <p>Type: {type}</p>
                            <p>HP: {hp}</p>
                            <p>Attack: {attack}</p>
                        </div>

                    </div>
                </div>


                {/* BACK */}
                <div
                    className="
                        absolute inset-0
                        [transform:rotateY(180deg)]
                        [backface-visibility:hidden]
                    "
                >
                    <CardBack />
                </div>

            </div>
        </div>
    );
}

export default Card;