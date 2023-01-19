import { create } from 'zustand';

const useCountStore = create((set) => ({
  count: 0,
  step: 1,
  childCount: 10,
  tick: () => set((state) => ({ count: state.count + state.step })),
  updateStep: (step) => set((state) => ({
    step,
    count: state.count + step,
  })),
}));

export { useCountStore };
