import { useContext, useEffect } from "react";
import { CounterContext } from "../context/count.context";

const Count = () => {
  const { count, step, tick, updateStep } = useContext(CounterContext);

  useEffect(() => {
    const id = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const onStepChange = (e) => {
    updateStep(Number(e.target.value));
  };

  return (
    <>
      <div>{count}</div>
      <input value={step} onChange={onStepChange} />
    </>
  );
};

export default Count;
