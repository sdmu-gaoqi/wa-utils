/**
 * @param value 金额
 * @param decimal 小数位
 * @param thousands 千分位
 * @desc 格式不正确返回的0
 * */
export const formatMoney = (value: number, decimal = 2, thousands = false) => {
  if (!Number(value)) {
    return 0;
  } else {
    const formattedValue = Number(value).toLocaleString();
    const decimalStr = `.${'0'.repeat(decimal)}`;
    return !thousands
      ? `${Number(value)}${decimalStr}`
      : `${formattedValue}${decimalStr}`;
  }
};

export const formatDiscount = (value: number) => {
  if (!Number(value)) {
    return '';
  }
  return `${(Number(value) * 10).toFixed(1)}折`;
};
