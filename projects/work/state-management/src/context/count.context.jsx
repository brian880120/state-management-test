import { createContext, useReducer } from "react";
import { counterReducer } from "./count.reducer";
import { counterActions, initCounterState } from "./count.state";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initCounterState);

  const value = {
    count: state.count,
    step: state.step,
    tick: () => {
      dispatch({
        type: counterActions.TICK,
      });
    },
    updateStep: (step) => {
      dispatch({
        type: counterActions.STEP,
        step,
      });
    },
  };

  return (
    <CounterContext.Provider value={value}>
      { children }
    </CounterContext.Provider>
  );
};
