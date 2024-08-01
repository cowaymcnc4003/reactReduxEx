import { combineReducers } from '@reduxjs/toolkit';
import boardSlice from './slices/boardSlice';

const rootReducer = combineReducers({
  board: boardSlice
});

export default rootReducer;