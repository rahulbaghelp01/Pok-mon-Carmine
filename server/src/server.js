import express from "express";
import pokemonRoute from "./routes/pokemonRoute.js"
import authRoute from "./routes/authRoute.js"

import cors from "cors";



 

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}));

const PORT = process.env.PORT || 6969;

app.use("/auth", authRoute);
app.use("/pokemon", pokemonRoute);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});