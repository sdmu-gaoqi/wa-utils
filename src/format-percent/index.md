---
title: formatPercent
toc: false
group:
  title: 数据处理
---

值转换为百分数表示

## 示例

```ts
import { formatPercent } from 'wa-utils';

const num = formatPercent(10.24);
console.log(num); // -> 10.24%

const num = formatPercent(3.1415926, 5);
console.log(num); // -> 3.14159%
```
