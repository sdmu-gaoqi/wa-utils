const joinCss = (prefixCls: string, names: string[], others?: string[]) => {
  return names
    .map((name) => {
      return `${prefixCls}-${name}`;
    })
    .concat(others || [])
    .join(` `);
};

export default joinCss;
