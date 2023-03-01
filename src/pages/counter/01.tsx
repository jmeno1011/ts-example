import React from 'react'
import { RootState } from '@/modules';
import { decrease, increase, increaseBy } from '@/modules/counter';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import CounterComponent from '@/components/counter/01/CounterComponent';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };
  return (
    <div className="layout">
      <Link href="/" className="link home">
        <h5>go home</h5>
      </Link>
      <CounterComponent
        count={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onIncreaseBy={onIncreaseBy}
      />
    </div>
  )
}
