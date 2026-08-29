export async function pokemonInfo(){
    const response =  await fetch("http://localhost:6969/pokemon");
    const data = await response.json();

    return data 
}