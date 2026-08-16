import express from "express";
import pokemonRoute from "./routes/pokemonRoute.js"
import authRoute from "./routes/authRoute.js"

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 6969;

app.use("/auth", authRoute);
app.use("/pokemon", pokemonRoute);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});