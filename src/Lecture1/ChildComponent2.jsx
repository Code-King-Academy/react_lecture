import { memo } from "react";

const ChildComponent2 = ({ obj, array }) => {
  console.log("obj 내용이 똑같아도?");
  console.log("obj", obj);
  console.log("array", array);

  return (
    <div>
      <h3>Child Component2 Object.is 를 사용해보자</h3>
    </div>
  );
};

export default memo(ChildComponent2);
