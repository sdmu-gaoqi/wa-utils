---
title: format
toc: false
order: -1
group:
  title: 数据处理
---

# format

格式化渲染函数

### 如何使用

```typescript
import { formatMoney, formatDiscount } from 'wa-utils';

// 千分位
formatMoney(999, 2); // 999.00
formatMoney(1000); // 1,000
formatMoney(1000, 2); // 1,000.00
// 折扣
formatDiscount(0.1); // 1折
```
