import Card from "./card.jsx"


function StarterPokemon() {
    return (
        <div className="font-cinzel bg-[var(--brown)] w-[60vw] flex flex-col pt-30 items-center gap-16  pl-10">
            <div className="flex flex-col items-center gap-2  ">
                <p className="text-[var(--white)] text-3xl ">
                    Everything begins with a choice
                </p>
                <p className="text-[var(--white)]/80 text- xl font-cormorant text-lg">
                    Choose your first companion and begin your journey.
                </p>
            </div>

            <div className=" flex justify-around items-center     w-200 h-100">
                <Card name="Charmandar"  />
                <Card  />
                <Card  />
            </div>
        </div>
    )
}

export default StarterPokemon