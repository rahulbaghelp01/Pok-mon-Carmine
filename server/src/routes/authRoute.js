
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
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

router.post("/validate", (req, res) => {

    const {authorization} = req.headers;

    if(!authorization) {
        return res.status(401).json({error: "Authorization token missing"});
    }

});


// POST request for registering a user

router.post("/register", async (req, res) => {

});


// POST request for logging in

router.post("/login", (req, res) => {

});


export default router;


 