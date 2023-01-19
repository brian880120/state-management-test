import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import mockListSlice from './mockListSlice';

export default configureStore({
  reducer: {
    counter: counterSlice,
    mockList: mockListSlice,
  },
});
