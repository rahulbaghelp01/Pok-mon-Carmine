import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pokemons:[],
    deck: []
}


const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        addPokemon: (state, action) => {
            state.pokemons.push(action.payload)
        }
    }
});


export default pokemonSlice.reducer