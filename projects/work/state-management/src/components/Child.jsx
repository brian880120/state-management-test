import { memo } from "react";
import { shallow } from 'zustand/shallow';
import { useCountStore } from "../store/count";

const Child = memo(() => {
  console.count('render child count');
  const { childCount } = useCountStore(
    (state) => ({
      childCount: state.childCount,
    }),
    shallow,
  );

  return (
    <>
      <p>Counter in Another Child: </p>
      <div>{childCount}</div>
    </>
  );
});

export default Child;
