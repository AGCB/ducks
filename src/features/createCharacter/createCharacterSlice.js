import { createSlice } from '@reduxjs/toolkit';

export const createCharacterSlice = createSlice({
  name: 'character',
  initialState: {
    "intelligence": 0,
    "strength": 0,
    "speed": 0,
  },
  reducers: {
    updateIntelligence: state => {
      state.intelligence += 1;
    }
  }
})

export const { updateIntelligence } = createCharacterSlice.actions;
export const character = state => state.character;
export default createCharacterSlice.reducer;
