import { createSlice } from '@reduxjs/toolkit';

export const snakeSlice = createSlice({
  name: 'snake',
  initialState: {
    snakeToggle: false,
  },
  reducers: {
    toggleTrue: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.snakeToggle = true;
    },
    toggleFalse: state => {
      state.snakeToggle = false;
    },
  },
});

export const { toggleTrue, toggleFalse } = snakeSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const snakeToggleValue = state => state.snake.snakeToggle;

export default snakeSlice.reducer;
