import React from 'react'

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

export default function CounterComponent({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProps) {
  return (
    <>
      <h1 className="counter">{count}</h1>
      <button className="counter-btn" onClick={onIncrease}>+1</button>
      <button className="counter-btn" onClick={onDecrease}>-1</button>
      <button className="counter-btn" onClick={() => onIncreaseBy(5)}>+5</button>
    </>
  )
}
