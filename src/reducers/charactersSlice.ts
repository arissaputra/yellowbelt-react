import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../types/character';

interface CharactersState {
  characters: Character[];
  selectedCharacter: Character | null;
}

const initialState: CharactersState = {
  characters: [],
  selectedCharacter: null,
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
    setSelectedCharacter: (state, action: PayloadAction<Character | null>) => {
      state.selectedCharacter = action.payload;
    },
  },
});

export const {
  setCharacters,
  setSelectedCharacter,
} = charactersSlice.actions;

export const selectAllCharacters = (state: { characters: CharactersState }) => state.characters.characters;
export const selectSelectedCharacter = (state: { characters: CharactersState }) => state.characters.selectedCharacter;

export default charactersSlice.reducer;