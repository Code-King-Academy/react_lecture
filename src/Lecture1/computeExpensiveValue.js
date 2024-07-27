/**
 *
 * @param {number} num
 * @returns {number}
 * @description - This function is used to compute an expensive value.
 */
const computeExpensiveValue = (num) => {
  console.log("Computing...");
  return num * 2; // 이 예시에서는 단순한 계산이지만, 실제로는 복잡한 계산이 될 수 있습니다.
};

export default computeExpensiveValue;
