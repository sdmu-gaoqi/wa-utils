/**
 * @param any
 * @returns boolean
 * @description 判断是否是有效的数字
 */
const isNumber = (value: any) =>
  typeof value === 'number' && !isNaN(value) && Math.abs(value) !== Infinity;

export default isNumber;
