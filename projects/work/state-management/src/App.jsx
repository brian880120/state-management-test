import { useEffect, useReducer } from 'react'
import './App.css'

const initState = {
  count: 0,
  step: 1,
};

const reducer = (state, action) => {
  const { count, step } = state;
  if (action.type === 'tick') {
    return {
      count: count + step,
      step,
    };
  } else if (action.type === 'step') {
    return {
      count: count,
      step: action.step,
    };
  } else {
    throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({
        type: 'tick',
      })
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const onStepChange = (e) => {
    dispatch({
      type: 'step',
      step: Number(e.target.value),
    })
  };

  return (
    <div className="App">
      {state.count}
      <input value={state.step} onChange={onStepChange} />
    </div>
  )
}

export default App
