---
title: copy
toc: false
group:
  title: 浏览器
---

# copy - 拷贝到剪贴板

基于 copy-to-clipboard 的 copy 方法封装 [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard)

## 示例

```typescript
import { copy } from 'wa-utils';

const msg = 'hello world!';
const copyData = copy(msg);
console.log(copyData); // => true
```
