interface Options {
  filterEmoji: boolean;
  trim: boolean;
  removeExtraSpace: boolean;
}

const emojiRegExp =
  // eslint-disable-next-line no-misleading-character-class, no-useless-escape
  /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi;
const extraSpaceRegExp = /\s(?=(\s)+)/g;

function filterEmoji(val: string): string {
  if (!val) return '';
  return val.replace(emojiRegExp, '');
}

function formatString(input: unknown, options?: Options): string {
  const type = typeof input;
  // nullish, object, symbol
  if (
    input === null ||
    input === undefined ||
    type === 'object' ||
    type === 'symbol' ||
    type === 'boolean'
  )
    return '';

  let val = input;
  // number
  if (type === 'number' || type === 'bigint') {
    if (isNaN(input as number)) return '';
    val = String(input);
  }
  let res = val as string;

  if (options?.trim) res = res.trim();
  if (options?.removeExtraSpace) res = res.replace(extraSpaceRegExp, '');
  if (options?.filterEmoji) res = filterEmoji(res);

  return res;
}

formatString.hasEmoji = (input: unknown): boolean => {
  const val = formatString(input);
  const res = emojiRegExp.test(val);
  emojiRegExp.lastIndex = 0;
  return res;
};

export default formatString;
