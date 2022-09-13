import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  isLoading: false,
  pokemon: null
}

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {

    isLoading: (state) => {
      state.isLoading = !state.isLoading
    },
    pokemon: (state, action) => {
      state.pokemon = pokemon.action
    }
  },
})

export const { isLoading, pokemon } = pokedexSlice.actions

export default pokedexSlice.reducer