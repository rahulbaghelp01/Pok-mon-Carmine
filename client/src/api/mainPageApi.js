const API_URL = import.meta.env.VITE_API_URL || "http://localhost:6969";

export async function pokemonInfo() {
    const response = await fetch(`${API_URL}/pokemon`);
    const data = await response.json();

    return data
}


export async function savePokemons(pokemons) {

    const token  = localStorage.getItem("token")
 

    const response = await fetch(`${API_URL}/pokemon/savePokemon`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization : `Bearer ${token}`
        },
        body: JSON.stringify(pokemons)
    });
    
}



export async function getUserData() { 
    const token  = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/pokemon/user`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        }


    });

    const data = await response.json();
    return data;
}