import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { tick, updateStep } from '../store/counterSlice';

const Count = () => {
  const count = useSelector((state) => state.counter.count);
  const step = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const onStepChange = (e) => {
    dispatch(updateStep(Number(e.target.value)));
  };

  return (
    <>
      <div>{count}</div>
      <input value={step} onChange={onStepChange} />
    </>
  );
};

export default Count;
