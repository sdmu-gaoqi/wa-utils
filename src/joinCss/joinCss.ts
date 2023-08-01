const joinCss = (prefixCls: string, names: string[]) => {
  return names
    .map((name) => {
      return `${prefixCls}-${name}`;
    })
    .join(` `);
};

export default joinCss;
