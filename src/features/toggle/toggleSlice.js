import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    value: false,
  },
  reducers: {
    toggleTrue: state => {
      state.value = true;
    },
    toggleFalse: state => {
      state.value = false;
    }
  }
});

export const { toggleTrue, toggleFalse } = toggleSlice.actions;

export const selectToggleValue = state => state.toggle.value;

export default toggleSlice.reducer;
