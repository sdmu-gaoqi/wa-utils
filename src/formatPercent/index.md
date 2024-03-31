---
title: formatPercent
toc: false
group:
  title: 数据处理
---

# formatPercent

百分比展示数值

### 如何使用

```ts
import { formatPercent } from 'wa-utils';

const num = formatPercent(10.24);
console.log(num); // -> 10.24%

const num = formatPercent(3.1415926, 5);
console.log(num); // -> 3.14159%
```
