export async function pokemonInfo() {
    const response = await fetch("http://localhost:6969/pokemon");
    const data = await response.json();

    return data
}


export async function savePokemons(pokemons) {

    const token  = localStorage.getItem("token")

    const response = await fetch("http://localhost:6969/pokemon/savePokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization : `Bearer ${token}`
        },
        body: JSON.stringify(pokemons)
    });
}