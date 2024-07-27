import { memo } from "react";

const ChildComponent = ({ handleClick }) => {
  console.log("차일드 컴포넌트는 재렌더링이 안되려면 어떻게 해야할까요?");

  // Object is 의 비교는 shallow comparison을 하기 때문에, 렌더링이 발생합니다.
  // 참조형 데이터를 props 로 받아오는 경우, memo 만으로는 렌더링을 막을 수 없습니다.
  // 상위 컴포넌트에서 useCallback 을 사용하여 함수를 생성하고, 해당 함수를 props 로 전달하면 렌더링을 막을 수 있습니다.

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>button</button>
    </div>
  );
};

export default memo(ChildComponent);
