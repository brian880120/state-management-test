import { memo } from "react";

const Child = memo(() => {
  return (
    <>
      <p>Counter in Another Child: </p>
    </>
  );
});

export default Child;
