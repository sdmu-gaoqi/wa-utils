---
title: ResizeListener
toc: false
order: -1
group:
  title: 工具函数
---

# ResizeListener

监听目标元素的尺寸变化

### 如何使用

```typescript
import { ResizeListener } from 'wa-utils';
const resizable = new ResizeListener();

/**
 * 将一个调整大小观察器附加到提供的文档元素，并在元素的大小发生更改时执行回调函数。
 *
 * @param {Element} document - 要观察大小更改的文档元素。
 * @param {(data: ResizeObserverEntry[]) => void} callback - 元素大小更改时要执行的回调函数。它接收一个 ResizeObserverEntry 对象数组作为参数。
 * @return {void} 该函数没有返回值。
 */
resizable.on(document.body, (data) => {
  const { contentRect } = data?.[0];
  console.log(contentRect);
});

// 结束监听
resizable.off();
```

<code src='./demo.tsx'></code>
