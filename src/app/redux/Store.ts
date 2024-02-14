import { configureStore, createSlice } from '@reduxjs/toolkit';

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

interface AppState {
  theme: String;
}

const initialState: AppState = {
  theme: Theme.Light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === Theme.Light ? Theme.Dark : Theme.Light;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export { store, Theme };
