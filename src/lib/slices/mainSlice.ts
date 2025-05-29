import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  initialState: {
    count: 1,
  },
  name: 'main',
  reducers: {
    updateCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { updateCount } = mainSlice.actions;

export default mainSlice.reducer;
