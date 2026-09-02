import frame from "../assets/svg-border/frame.svg";

function PokemonCard({ pokemon }) {
    return (
        <div
            className="
                h-90 w-60
                lg:h-60 lg:w-45
                xl:h-90 xl:w-60
                p-2
                bg-[var(--gold)]
                rounded
            "
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
                        {pokemon.name}
                    </p>

                    <img
                        className="w-full h-full object-cover"
                        src={pokemon.image}
                        alt={`${pokemon.name} image`}
                    />
                </div>

                <div className="font-bold bg-black/30 flex flex-col justify-between h-[40%] p-4 lg:p-3 gap-1 text-[var(--text)] font-cormorant text-sm lg:text-base">
                    <p>Name: {pokemon.name}</p>
                    <p>Type: {pokemon.type}</p>
                    <p>HP: {pokemon.hp}</p>
                    <p>Attack: {pokemon.attack}</p>
                </div>

            </div>
        </div>
    );
}

export default PokemonCard;