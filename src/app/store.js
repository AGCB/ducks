import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import snakeReducer from '../features/games/snake/snakeSlice';

export default configureStore({
  reducer: {
    defaultCounter: counterReducer,
    snake: snakeReducer,
  },
});
