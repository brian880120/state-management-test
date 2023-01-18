import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    step: 1,
    childCount: 10,
  },
  reducers: {
    tick: (state) => {
      state.count += state.step;
    },
    updateStep: (state, action) => {
      state.step = action.payload;
      state.count += action.payload;
    },
  }
});

export const { tick, updateStep } = counterSlice.actions;
export default counterSlice.reducer;
