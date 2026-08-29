import express from 'express'

const router = express.Router();

router.get('/', async (req, res) => {
    const randomIdOne = Math.floor(Math.random() * 1000) + 1;
    const randomIdTwo = Math.floor(Math.random() * 1000) + 1;
     

    async function pokemon(id) {
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const pokemonData = await pokemonResponse.json();

    const moves = pokemonData.moves;
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    const moveUrl = randomMove.move.url;

    const attackResponse = await fetch(moveUrl, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const moveData = await attackResponse.json();

    const obj = {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.other["official-artwork"].front_default,
        type: pokemonData.types.map(t => t.type.name),
        hp: pokemonData.stats.find(s => s.stat.name === "hp").base_stat,
        attack: moveData.power
    };

    return obj;
}

    const pokemonOne = await pokemon(randomIdOne);
    const pokemonTwo = await pokemon(randomIdTwo);
    const grassImage = {
        assets: "http://localhost:6969/assets/grassimagess.webp",
        type: "grassImage"
    } 

    const pokeballs = Math.floor(Math.random() * 10 ) + 1
    const pokeballImage = {
        assets: "http://localhost:6969/assets/pokeballimage.png",
        type: "pokeballImage",
        pokeballs 
    }


    const pokemonInfo = [pokemonOne,pokemonTwo,grassImage,pokeballImage,grassImage,grassImage].sort(() => Math.random() - 0.5); 
    
    res.status(200).json(
        pokemonInfo
    )
     

     
});

export default router