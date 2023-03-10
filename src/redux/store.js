import { configureStore } from '@reduxjs/toolkit';
import useReduc from './reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, useReduc);

export const store = configureStore({
  reducer: pReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
