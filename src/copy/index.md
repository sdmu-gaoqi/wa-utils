---
title: copy
toc: false
group:
  title: 浏览器
---

# copy

拷贝到剪贴板

基于 `copy-to-clipboard` 封装 [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard)

### 如何使用

```typescript
import { copy } from 'wa-utils';

const msg = 'hello world!';
const copyData = copy(msg);
```
