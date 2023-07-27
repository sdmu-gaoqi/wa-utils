const clientRect = (dom: HTMLElement): DOMRect | null => {
  if (!dom) {
    return null;
  }
  const rect = dom.getBoundingClientRect();
  if (!rect) return null;
  return rect;
};

export default clientRect;
