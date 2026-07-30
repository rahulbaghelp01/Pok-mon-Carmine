function StarterPokemon() {
    return (
        <div className="font-cinzel bg-[var(--brown)] w-1/2 flex flex-col pt-40 items-center gap-16">
            <div className="flex flex-col items-center gap-2 px">
            <p className="text-[var(--white)] text-3xl ">
                Everything begins with a choice
            </p>
            <p className="text-[var(--white)]/80 text- xl font-cormorant text-lg">
                Choose your first companion and begin your journey.
            </p>
            </div>

            <div className="flex h-40 w-40 bg-[image:var(--paper)]">
            </div>
        </div>
    )
}

export default StarterPokemon