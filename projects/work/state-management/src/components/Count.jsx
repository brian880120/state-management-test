import { useEffect } from "react";
import { useCountStore } from "../store/count";

const Count = () => {
  const { count, step, tick, updateStep } = useCountStore();

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
