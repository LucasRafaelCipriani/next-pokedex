import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './slices/mainSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      main: mainSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
