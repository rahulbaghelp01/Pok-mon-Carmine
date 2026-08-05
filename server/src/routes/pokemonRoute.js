import express from 'express'

const router = express.Router();

router.get('/', async (req, res) => {
    const randomIdOne = Math.floor(Math.random() * 1000) + 1;
    const randomIdTwo = Math.floor(Math.random() * 1000) + 1;
    let pokemonInfo = [];

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
        types: pokemonData.types.map(t => t.type.name),
        hp: pokemonData.stats.find(s => s.stat.name === "hp").base_stat,
        attack: {
            name: moveData.name,
            damage: moveData.power ?? 0
        }
    };

    return obj;
}

    const pokemonOne = await pokemon(randomIdOne);
    const pokemonTwo = await pokemon(randomIdTwo);

    pokemonInfo.push(pokemonOne, pokemonTwo);

    res.send(pokemonInfo);
});

export default router