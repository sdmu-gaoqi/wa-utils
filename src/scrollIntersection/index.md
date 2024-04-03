---
title: ScrollIntersection
toc: false
order: -1
group:
  title: 工具函数
---

# ScrollIntersection

对目标元素进行滚动监听,并返回当前滚动视图在第几个 `children` 下

### 如何使用

```typescript
import { ScrollIntersection } from 'wa-utils';

const scrollIntersection = new ScrollIntersection();

scrollIntersection.init(document.body, {
  notice: (index) => {
    console.log(index);
  },
});

// 结束监听
scrollIntersection.remove();
```

<code src="./demo.tsx"></code>
