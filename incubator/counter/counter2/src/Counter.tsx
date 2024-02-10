import { useState } from "react";

type PropsType = {
  title: string;
};

export function Counter(props: PropsType) {
  let [counterValue, setCounterValue] = useState(0);

  const incHandler = () => {
    setCounterValue(counterValue + 1);
  };

  const resetHandler = () => {
    setCounterValue(0);
  };

  return (
    <div className="counterBody">
      <h3 className="title">{props.title}</h3>
      <h2 className="counterValue">{counterValue}</h2>
      <div>
        <button className="buttonsArea" onClick={incHandler}>
          inc
        </button>
        <button className="buttonsArea" onClick={resetHandler}>
          reset
        </button>
      </div>
    </div>
  );
}
