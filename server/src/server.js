import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import pokemonRoute from "./routes/pokemonRoute.js"
import authRoute from "./routes/authRoute.js"

import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://pok-mon-carmine.vercel.app"
    ]
}));

app.use("/assets", express.static(path.join(__dirname, "assets")));

const PORT = process.env.PORT || 6969;

app.use("/auth", authRoute);
app.use("/pokemon", pokemonRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});