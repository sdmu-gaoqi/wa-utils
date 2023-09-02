const joinCss = (prefixCls: string, names: string[], others: string[]) => {
  return names
    .map((name) => {
      return `${prefixCls}-${name}`;
    })
    .join(` `)
    .concat(others.join(` `));
};

export default joinCss;
