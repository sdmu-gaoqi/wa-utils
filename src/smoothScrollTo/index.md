---
title: smoothScrollTo
toc: false
order: -1
group:
  title: 浏览器
---

# smoothScrollTo 以更平滑的方式滚动元素

```typescript
import { smoothScrollTo } from 'wa-utils';

/**
 * @param { number } distance 滑动距离
 * @param {{ duration?: number; isHorizontal?: boolean; target?: any }} options
 * @description duration 持续时间 isHorizontal 是否时水平滚动 target目标元素 默认是body
 * */
smoothScrollTo();
```

<code src="./demo.tsx" inline></code>
