---
title: eventListener
toc: false
order: -1
group:
  title: 工具函数
  order: -1
---

# eventListener

事件监听注册器
为 `dom` 快速创建事件监听

## 如何使用

```typescript
import { on, off } from 'wa-utils';

const clickFn = () => {};

on(document.body, 'click', clickFn);
off(document.body, 'click', clickFn);
```

<code src="./demo/index.tsx"></code>
