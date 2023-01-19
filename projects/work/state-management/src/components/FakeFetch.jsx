import { memo } from "react";
import { useMockList } from "../store/mockList";
import { shallow } from "zustand/shallow";

const FakeFetch = memo(() => {
  const { fetchList, list } = useMockList(
    (state) => ({
      list: state.list,
      fetchList: state.fetchList,
    }),
    shallow
  );

  console.count('render fake list');
  return (
    <>
      <button onClick={fetchList}>fetch</button>
      <ul>
        {
          list.map(item => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </>
  );
});

export default FakeFetch;
