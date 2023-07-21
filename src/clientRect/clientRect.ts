const clientRect = (dom: any) => {
  if (!dom) {
    return null;
  }
  const rect = dom.getBoundingClientRect();
  if (!rect) return null;
  return rect;
};

export default clientRect;
