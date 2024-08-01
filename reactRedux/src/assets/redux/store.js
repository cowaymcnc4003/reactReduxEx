import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const deFaultMiddleware = getDefaultMiddleware();
    return [...deFaultMiddleware];
  }
});

export default store;