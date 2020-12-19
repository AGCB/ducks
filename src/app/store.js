import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import toggleReducer from '../features/toggle/toggleSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer,
  },
});
