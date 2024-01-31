import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favorites.slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      favoritesReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];