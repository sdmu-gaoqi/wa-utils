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
    let formattedValue = Number(value).toLocaleString();
    let decimalStr = formattedValue?.split('.')[1] || '00';
    formattedValue = formattedValue?.split('.')[0] || '0';
    if (decimalStr) {
      if (decimalStr?.length < decimal) {
        const joinLength = decimal - decimalStr?.length;
        decimalStr += '0'.repeat(joinLength);
      } else {
        decimalStr = decimalStr.slice(0, decimal);
      }
    }
    decimalStr = decimalStr ? `.${decimalStr}` : '';
    return !thousands
      ? `${Number(String(value)?.split('.')?.[0])}${decimalStr}`
      : `${formattedValue}${decimalStr}`;
  }
};

export const formatDiscount = (value: number) => {
  if (!Number(value)) {
    return '';
  }
  return `${(Number(value) * 10).toFixed(1)}折`;
};
