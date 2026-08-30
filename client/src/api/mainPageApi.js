export async function pokemonInfo(){
    const response =  await fetch("http://localhost:6969/pokemon");
    const data = await response.json();

    return data 
}


export async function savePokemons(pokemons) {
    const response = await fetch("http://localhost:6969/pokemon/savePokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pokemons)
    });
}