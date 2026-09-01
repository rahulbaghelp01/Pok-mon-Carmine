import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    pokemons: [],
    selectionLocked: false,
    pokeballs: 0
    
};


const pokemonSlice = createSlice({

    name: "pokemon",
    initialState,
    reducers: {
        addPokemon: (state, action) => {
            state.pokemons.push(action.payload)
        },
        addSelectedPokemon: (state, action) => {
            state.pokemons[0] = action.payload
        },
        lockSelection: (state) => {
            state.selectionLocked = true;
        },
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        }
    }

});


export const { addPokemon, addSelectedPokemon, lockSelection, setPokemons, setPokeballs } = pokemonSlice.actions

export default pokemonSlice.reducer