class ResizeListener {
  observer: any;
  dom: Element | null;
  constructor() {
    this.dom = null;
  }
  on(document: Element, callback: (data: ResizeObserverEntry[]) => void) {
    if (document) {
      this.dom = document;
      this.observer = new ResizeObserver((entries) => {
        callback(entries);
      });
      this.observer.observe(document);
    } else {
      console.error('dom元素不存在');
    }
  }
  off() {
    if (this.observer) {
      this.observer.unobserve(this.dom);
    }
  }
}

export default ResizeListener;
