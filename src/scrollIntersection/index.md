---
title: ScrollIntersection
toc: false
order: -1
group:
  title: 工具函数
---

# ScrollIntersection 滚动监听

```typescript
import { ResizeListener } from 'wa-utils';

const resizeListener = new ResizeListener();

resizeListener.init(document.body, {
  notice: (index) => {
    console.log(index);
  },
});

// 结束监听
resizeListener.remove();
```
