import { memo } from "react";
import { useSelector } from 'react-redux';

const Child = memo(() => {
  console.count('render child count');
  const childCount = useSelector((state) => state.counter.childCount);
  return (
    <>
      <p>Counter in Another Child: </p>
      <div>{childCount}</div>
    </>
  );
});

export default Child;
