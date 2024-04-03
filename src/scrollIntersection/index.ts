import { debounce } from 'wa-utils';

class ScrollIntersection {
  public dom: Element | null = null;
  public notice: ((data: number) => void) | null = null;

  private intersectionObserver: IntersectionObserver = new IntersectionObserver(
    debounce((entries) => {
      const els = entries
        .map((item: any, index: number) => {
          return Object.assign(item, {
            sort: index + item?.intersectionRatio,
          });
        })
        .sort((a: any, b: any) => b.sort - a.sort);

      const target = els?.[0]?.target;
      const id = target?.getAttribute('data-scroll-id');
      if (els?.[0]?.intersectionRatio > 0.5) {
        this.notice?.(Number(id) || 0);
      }
    }, 500),
    {
      threshold: Array.from({ length: 10 }).map((_, index) => (index + 1) / 10),
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
