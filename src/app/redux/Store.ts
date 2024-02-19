import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

// Export Theme enum
export { Theme };

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

// Site Data Slice
interface SiteData {
  // Site Data Structure
  aboutText: { text : string; }
  counter: Array<{ icon: string; title: string; count: number; }>;
  featureSkill: Array<{ icon: string; title: string; text: string; }>;
  contactText: { text: string; };
  contactDetail: Array<{ icon: string; title: string; text: string; link: string; }>;
  homeText: { text: string; animationStrings: Array<string>; };
  socialLink: Array<{ key: string; icon: string; link: string; title: string; }>;
  recommendation: Array<{ img: string; name: string; designation: string; say: Array<string>; }>;
  experience: Array<{ title: string; date: string; description: string; }>;
  education: Array<{ title: string; date: string; description: string; }>;
  certificate: Array<{ title: string; img: string; type: string; }>;
}

const initialSiteData: SiteData = {
  aboutText: { text: "" },
  counter: [],
  featureSkill: [],
  contactText: { text: "" },
  contactDetail: [],
  homeText: { text: "I'm Wayne", animationStrings: ["Developer"] },
  socialLink: [],
  recommendation: [],
  experience: [],
  education: [],
  certificate: [],
};

// Export Site Data interface
export type { SiteData };

const siteDataSlice = createSlice({
  name: 'siteData',
  initialState: initialSiteData,
  reducers: {
    setSiteData: (state, action: PayloadAction<SiteData>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setSiteData } = siteDataSlice.actions;

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    siteData: siteDataSlice.reducer,
    // ... add other slices if needed
  },
});

export { store };
