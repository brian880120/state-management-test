import { counterActions } from "./count.state";

export const counterReducer = (state, action) => {
  const { count, step } = state;
  if (action.type === counterActions.TICK) {
    return {
      count: count + step,
      step,
    };
  } else if (action.type === counterActions.STEP) {
    return {
      count,
      step: action.step,
    };
  } else {
    throw new Error();
  }
};
