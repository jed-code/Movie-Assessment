import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import movieReducer from '../Slices/movieSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['movies'],
};

const persistedReducer = persistReducer(persistConfig, movieReducer);

export const store = configureStore({
  reducer: {
    movies: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
