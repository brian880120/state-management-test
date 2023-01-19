import { create } from 'zustand';

const mockFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 500);
  });
};

const useMockList = create((set, get) => ({
  list: [],
  setList: (data) => set(() => ({
    list: data,
  })),
  fetchList: async () => {
    const data = await mockFetch();
    get().setList(data);
  },
}));

export { useMockList };
