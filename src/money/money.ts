function toThousands(num: string) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

function formatMoney(value: any, unit = 2) {
  if (!value) {
    return '0';
  }
  // 将参数转换为浮点数
  let floatValue = parseFloat(value || 0);

  // 检查是否是有效的数值
  if (isNaN(floatValue)) {
    return 'Invalid value';
  }

  // 使用toFixed()方法将浮点数转换为字符串，并指定小数位数为2
  let formattedValue = floatValue.toFixed(unit);

  // 返回格式化后的字符串
  return formattedValue;
}

export { toThousands, formatMoney };
