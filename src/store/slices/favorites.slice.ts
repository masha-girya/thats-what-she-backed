import { LOCAL_STORAGE } from '@/constants';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const loadCartStateFromLocalStorage = async () => {
  if (window !== undefined) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const localStorageData: string[] = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE.favRecipes) || '[]',
        );
        resolve(localStorageData);
      }, 200); // Приклад асинхронного завантаження
    });
  } else {
    return [];
  }
};

// Асинхронна дія для завантаження даних з localStorage
export const loadCartState = createAsyncThunk(
  'favorites/loadState',
  async () => {
    const data = await loadCartStateFromLocalStorage();
    return data;
  },
);

const getFavsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE.favRecipes) || '[]');
};

interface InitialState {
  favoritesSlugs: string[];
}

const initialState: InitialState = {
  favoritesSlugs: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favoritesSlugs = action.payload;
    },
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favoritesSlugs.push(action.payload);

      const localData = getFavsFromLocalStorage();
      const newLocalData = [...localData, action.payload];

      localStorage.setItem(
        LOCAL_STORAGE.favRecipes,
        JSON.stringify(newLocalData),
      );
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favoritesSlugs = state.favoritesSlugs.filter(
        (id) => id !== action.payload,
      );

      const localData = getFavsFromLocalStorage();
      const newLocalData = localData.filter(
        (id: string) => id !== action.payload,
      );

      localStorage.setItem(
        LOCAL_STORAGE.favRecipes,
        JSON.stringify(newLocalData),
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCartState.fulfilled, (state, action) => {
      state.favoritesSlugs = action.payload as string[];
    });
  },
});

export const favoritesAction = favoritesSlice.actions;
export default favoritesSlice.reducer;
