
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import pkg from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { customAlphabet } from "nanoid";
import authMiddleware from "../middleware/authMiddleware.js";
 


const { PrismaClient } = pkg;

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({
    adapter
});

const router = express.Router();


// GET request for starter Pokemons

router.get("/", async (req, res) => {
    const pokemons = await prisma.pokemon.findMany({
        where: {
            id: {
                in: [1, 4, 7]
            }
        }
    });

    res.json(pokemons);
});


// POST request for validating the token
router.post("/validate", authMiddleware, (req, res) => {
    res.status(200).json({
        message: "User authenticated",
        user: req.user
    });
});


// POST request for registering a new user

router.post("/register", async (req, res) => {
    const { username, email, password, pokemonId } = req.body;

    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [
                { email: email },
                { username: username }
            ]
        }
    });

    if (existingUser) {
        return res.status(409).json({
            message: "The user with this name or email already exists. Please login."
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const generateGameId = customAlphabet("0123456789", 12);
    const gamingId = Number(generateGameId());

    const user = await prisma.user.create({
        data: {
            gamingId,
            username,
            password: hashedPassword,
            email
        }
    });

    await prisma.userPokemon.create({
        data: {
            userId: user.id,
            pokemonId
        }
    });

    const token = jwt.sign(
        {
            userId: user.id,
            gamingId: user.gamingId,
            username: user.username,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );

    res.status(201).json({
        message: "User registered successfully",
        token
    });
});


// POST request for logging in

router.post("/login", async (req, res) => {

    const { identifier, password } = req.body;

    const user = await prisma.user.findFirst({
        where: {
            OR: [
                { email: identifier },
                { username: identifier }
            ]
        }
    })

    if (!user) {
        return res.status(401).json({
            message: "Invalid credentials. Please check your username/email and password."
        })
    }

    const isValidpassword = await bcrypt.compare(password, user.password);

    if (!isValidpassword) {
        return res.status(401).json({
            message: "Invalid credentials. Please check your username/email and password."
        })
    }

    const token = jwt.sign({
        userId: user.id,
        gamingId: user.gamingId,
        username: user.username
    },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        });

    res.status(200).json({
        message: "Login successful",
        token
    });


});


export default router;


