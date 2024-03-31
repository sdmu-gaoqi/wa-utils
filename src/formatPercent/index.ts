import isNumber from '../isNumber';

/**
 * 将值转换为百分数
 * @param value 任何值
 * @param precision 小数位
 */
function formatPercent(value: any, precision: number = 2): string {
  let result = '0';
  if (isNumber(value) && value !== 0) {
    result = value % 1 === 0 ? `${value * 100}` : value.toFixed(precision);
  }
  return `${result}%`;
}

export default formatPercent;
