import { memo, useContext } from "react";
import { CounterContext } from "../context/count.context";

const Child = memo(() => {
  console.count('render child count');
  const { childCount } = useContext(CounterContext);
  return (
    <>
      <p>Counter in Another Child: </p>
      <div>{childCount}</div>
    </>
  );
});

export default Child;
