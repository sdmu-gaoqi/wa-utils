---
title: pageHidden
toc: false
order: 10
group:
  title: 浏览器
---

# registerPageHidden - 监听页面显隐

## 示例

```typescript
import { registerPageHidden } from 'wa-utils';

const hiddenCB = () => {
  console.log('page is hidden');
};

const showCB = () => {
  console.log('page is show');
};

// 注册监听
const cancel = registerPageHidden(hiddenCB, showCB);

// 取消监听
cancel();
```
