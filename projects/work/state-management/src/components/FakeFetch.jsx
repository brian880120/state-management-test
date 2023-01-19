import { memo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '../store/mockListSlice';

const FakeFetch = memo(() => {
  console.count('render fake list');

  const dispatch = useDispatch();
  const list = useSelector((state) => state.mockList.list);

  return (
    <>
      <button onClick={() => dispatch(fetchList(2))}>fetch</button>
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
