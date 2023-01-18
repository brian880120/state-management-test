import { counterActions } from "./count.state";

export const counterReducer = (state, action) => {
  const { count, step, childCount } = state;
  if (action.type === counterActions.TICK) {
    return {
      count: count + step,
      step,
      childCount,
    };
  } else if (action.type === counterActions.STEP) {
    return {
      count,
      childCount,
      step: action.step,
    };
  } else {
    throw new Error();
  }
};
