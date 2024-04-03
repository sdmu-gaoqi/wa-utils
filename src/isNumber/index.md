---
title: isNumber
toc: false
order: -1
group:
  title: 验证函数
---

# isNumber

判断是否为有效数字

### 如何使用

```ts
import { isNumber } from 'wa-utils';

isNumber(0); // -> true
isNumber(NaN); // -> false
isNumber(Infinity); // -> false
```
