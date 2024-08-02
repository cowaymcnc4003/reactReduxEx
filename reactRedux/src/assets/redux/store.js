import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './saga/index'

const sagaMiddleWare = createSagaMiddleWare();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const deFaultMiddleware = getDefaultMiddleware();
    return [...deFaultMiddleware, sagaMiddleWare];
  }
});

sagaMiddleWare.run(rootSaga);

export default store;