import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pokemons:[],
    deck: [],
    selectionLocked : false
}


const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        addPokemon: (state, action) => {
            state.pokemons.push(action.payload)
        },
        addSelectedPokemon: (state,action)=>{
            state.pokemons[0] = action.payload
        },
        lockSelection: (state) => {
            state.selectionLocked = true;
        }
    }
});


export const {addPokemon,addSelectedPokemon,lockSelection} = pokemonSlice.actions

export default pokemonSlice.reducer