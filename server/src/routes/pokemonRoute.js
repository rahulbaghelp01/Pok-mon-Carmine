import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import "dotenv/config";
import pkg from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";


const { PrismaClient } = pkg;

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({
    adapter
});

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
            type: pokemonData.types.map(t => t.type.name).join(", "),
            hp: pokemonData.stats.find(s => s.stat.name === "hp").base_stat,
            attack: moveData.power ?? 0
        };

        return obj;
    }

    const pokemonOne = await pokemon(randomIdOne);
    const pokemonTwo = await pokemon(randomIdTwo);
    const grassImage = {
        assets: "http://localhost:6969/assets/grassimagess.webp",
        type: "grassImage"
    }

    const pokeballs = Math.floor(Math.random() * 10) + 1
    const pokeballImage = {
        assets: "http://localhost:6969/assets/pokeballimage.png",
        type: "pokeballImage",
        pokeballs
    }

    await prisma.pokemon.createMany({
        data: [pokemonOne, pokemonTwo],
        skipDuplicates: true
    });


    const pokemonInfo = [pokemonOne, pokemonTwo, grassImage, pokeballImage, grassImage, grassImage].sort(() => Math.random() - 0.5);

    res.status(200).json(
        pokemonInfo
    )



});



router.post("/savePokemon", authMiddleware, async (req, res) => {

    const userId = req.user.userId;
    const obtainedCards = req.body;

    const obtainedPokemons = obtainedCards.filter(
        (pokemon) => pokemon.id
    ).map((pokemon) => {
        return {
            userId,
            pokemonId: pokemon.id
        }
    });

    const pokeballReward = obtainedCards.find(
        (card) => card.pokeballs
    );

    if (obtainedPokemons.length > 0) {
        await prisma.userPokemon.createMany({
            data: obtainedPokemons,
            skipDuplicates: true
        });
    }

    if (pokeballReward) {
        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                pokeballs: {
                    increment: pokeballReward.pokeballs
                }
            }
        });
    }

    res.status(200).json({
        message: "Pokemon saved successfully"
    });

});




router.get("/user", authMiddleware, async (req, res) => {

    const userId = req.user.userId;

    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            gamingId: true,
            username: true,
            email: true,
            pokeballs: true,
            pokemon: {
                include: {
                    pokemon: true
                }
            }
        }
    });

    res.status(200).json(user);
});





export default router