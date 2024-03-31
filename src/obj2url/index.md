---
title: obj2url
toc: false
order: -2
group:
  title: 数据处理
---

# obj2url

对象参数转 url

序列化对象转为标准 url 请求参数

### 如何使用

```typescript
import { obj2url } from 'wa-utils';

console.log(obj2url({ a: 323, name: 'momo' })); // => a=323&name=momo

// 依赖 encodeURIComponent 处理编码转换
console.log(obj2url({ a: 323, name: 'mo mo' })); // => a=323&name=mo%20mo
```
