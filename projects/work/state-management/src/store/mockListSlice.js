import { createSlice } from '@reduxjs/toolkit';

const mockFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 500);
  });
};

export const mockListSlice = createSlice({
  name: 'mockList',
  initialState: {
    list: [],
  },
  reducers: {
    fetchList: async (state) => {
      const data = await mockFetch();
      console.log(data);
      return {
        ...state,
        list: data,
      };
    }
  }
});

export const { fetchList } = mockListSlice.actions;
export default mockListSlice.reducer;
