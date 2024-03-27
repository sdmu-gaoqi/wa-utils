class ScrollIntersection {
  public dom: Element | null = null;
  public notice: ((data: number) => void) | null = null;

  private intersectionObserver: IntersectionObserver = new IntersectionObserver(
    (entries) => {
      const els = entries
        .map((item, index) => {
          return Object.assign(item, {
            sort: index + item?.intersectionRatio,
          });
        })
        .sort((a, b) => b.sort - a.sort);

      const target = els?.[0]?.target;
      const id = target?.getAttribute('data-scroll-id');
      this.notice?.(Number(id) || 0);
    },
    {
      threshold: [0.01, 0.25, 0.5, 0.75, 1],
    },
  );

  init(
    el: HTMLElement,
    options: {
      notice: (data: number) => void;
    },
  ) {
    this.dom = el;
    this.notice = options?.notice;
    Array.prototype.forEach.call(
      this.dom.children,
      (item: HTMLElement, index) => {
        item.setAttribute('data-scroll-id', String(index));
        this.intersectionObserver.observe(item);
      },
    );
  }

  remove() {
    this.intersectionObserver.disconnect();
  }
}

export default ScrollIntersection;
