import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  initialState: {
    pokemonList: [] as { name: string; url: string }[],
    searchList: [] as { name: string; url: string }[],
    count: 0,
  },
  name: 'main',
  reducers: {
    updateList: (state, action) => {
      state.pokemonList = action.payload.list;
      state.searchList = [];
      state.count = action.payload.count;
    },
    searchPokemon: (state, action) => {
      state.searchList = action.payload.list;
    },
  },
});

export const { updateList, searchPokemon } = mainSlice.actions;

export default mainSlice.reducer;
