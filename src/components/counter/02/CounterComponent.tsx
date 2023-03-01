import useCounter from "@/hooks/useCounter";
import React from "react";

export default function CounterComponent() {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();
  return (
    <>
      <h1 className="counter">{count}</h1>
      <button className="counter-btn" onClick={onIncrease}>+1</button>
      <button className="counter-btn" onClick={onDecrease}>-1</button>
      <button className="counter-btn" onClick={() => onIncreaseBy(5)}>+5</button>
    </>
  );
}
