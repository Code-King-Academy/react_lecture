import { useMemo, useState } from "react";
import computeExpensiveValue from "./computeExpensiveValue";
import ChildComponent from "./ChildComponent";
import ChildComponent2 from "./ChildComponent2";
import "./Lecture1_1.css";

const Lecture1_1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const num = 10;

  const expensiveValue = useMemo(() => computeExpensiveValue(num), [num]);

  const obj = { a: 1 };
  const array = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>useMemo 와 useCallback 차이</h1>

      <div className="section">
        <h3>useMemo 란 무엇인가?</h3>

        <p>
          <a href="https://react.dev/reference/react/useMemo">useMemo</a>는
          메모이제이션된 값을 반환합니다. 즉, 특정 값이 변경될 때만 함수를
          재실행하고, 그렇지 않을 경우 이전에 계산된 값을 재사용합니다. 이는
          값의 재계산을 방지하여 성능을 최적화합니다.
        </p>
        <p>expensiveValue : {expensiveValue}</p>
      </div>

      <div className="section">
        <h3>useCallback 이란 무엇인가?</h3>

        <p>
          <a href="https://react.dev/reference/react/useCallback">
            useCallback
          </a>
          은 메모이제이션된 콜백 함수를 반환합니다. 이는 함수의 재생성을
          방지하여 성능을 최적화합니다. useCallback은 두 번째 인자로 의존성
          배열을 받아 해당 값이 변경될 때만 함수를 재생성합니다. 이는 useMemo와
          유사하지만, 함수를 반환한다는 점에서 차이가 있습니다.
        </p>

        <ChildComponent handleClick={handleClick} />
        <div>count : {count}</div>
      </div>

      <div className="section">
        <h3>Object.is() 란?</h3>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is">
          Object.is()
        </a>

        <ChildComponent2 obj={obj} array={array} />
      </div>
    </div>
  );
};

export default Lecture1_1;
