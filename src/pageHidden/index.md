---
title: registerPageHidden
toc: false
order: 10
group:
  title: 浏览器
---

# registerPageHidden

监听页面显隐

### 如何使用

```typescript
import { registerPageHidden } from 'wa-utils';

const hiddenCallback = () => {
  console.log('page is hidden');
};

const showCallback = () => {
  console.log('page is show');
};

// 注册监听
const cancel = registerPageHidden(hiddenCB, showCB);

// 取消监听
cancel();
```
